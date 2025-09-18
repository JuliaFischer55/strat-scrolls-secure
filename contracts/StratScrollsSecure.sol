// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@fhevm/solidity/FHE.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

/**
 * @title StratScrollsSecure
 * @dev Privacy-preserving strategy marketplace with FHE encryption
 * @author JuliaFischer55
 */
contract StratScrollsSecure is ReentrancyGuard, Ownable, Pausable {
    using FHE for euint32;
    using FHE for euint64;
    using FHE for euint128;
    using FHE for euint256;

    // Strategy structure with encrypted data
    struct Strategy {
        uint256 id;
        address creator;
        string name;
        string description;
        euint32 encryptedPrice; // Encrypted price in wei
        euint32 encryptedPerformance; // Encrypted performance score (0-100)
        euint32 encryptedRisk; // Encrypted risk score (0-100)
        euint64 encryptedTimestamp; // Encrypted creation timestamp
        bool isActive;
        uint256 purchaseCount;
        mapping(address => bool) hasPurchased;
    }

    // Purchase record with encrypted data
    struct Purchase {
        uint256 strategyId;
        address buyer;
        euint32 encryptedAmount; // Encrypted purchase amount
        euint64 encryptedTimestamp; // Encrypted purchase timestamp
        bool isActive;
    }

    // State variables
    uint256 public nextStrategyId = 1;
    uint256 public nextPurchaseId = 1;
    uint256 public platformFeePercentage = 5; // 5% platform fee
    uint256 public totalStrategies = 0;
    uint256 public totalPurchases = 0;

    // Mappings
    mapping(uint256 => Strategy) public strategies;
    mapping(uint256 => Purchase) public purchases;
    mapping(address => uint256[]) public userStrategies;
    mapping(address => uint256[]) public userPurchases;
    mapping(address => uint256) public userEarnings;

    // Events
    event StrategyCreated(
        uint256 indexed strategyId,
        address indexed creator,
        string name,
        uint256 timestamp
    );

    event StrategyPurchased(
        uint256 indexed strategyId,
        address indexed buyer,
        address indexed creator,
        uint256 timestamp
    );

    event StrategyUpdated(
        uint256 indexed strategyId,
        address indexed creator,
        uint256 timestamp
    );

    event StrategyDeactivated(
        uint256 indexed strategyId,
        address indexed creator,
        uint256 timestamp
    );

    event PlatformFeeUpdated(
        uint256 oldFee,
        uint256 newFee,
        uint256 timestamp
    );

    // Modifiers
    modifier onlyStrategyCreator(uint256 _strategyId) {
        require(strategies[_strategyId].creator == msg.sender, "Not strategy creator");
        _;
    }

    modifier strategyExists(uint256 _strategyId) {
        require(_strategyId < nextStrategyId && _strategyId > 0, "Strategy does not exist");
        _;
    }

    modifier strategyActive(uint256 _strategyId) {
        require(strategies[_strategyId].isActive, "Strategy is not active");
        _;
    }

    /**
     * @dev Create a new strategy with encrypted parameters
     * @param _name Strategy name
     * @param _description Strategy description
     * @param _encryptedPrice Encrypted price in wei
     * @param _encryptedPerformance Encrypted performance score (0-100)
     * @param _encryptedRisk Encrypted risk score (0-100)
     */
    function createStrategy(
        string memory _name,
        string memory _description,
        euint32 _encryptedPrice,
        euint32 _encryptedPerformance,
        euint32 _encryptedRisk
    ) external whenNotPaused {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        uint256 strategyId = nextStrategyId++;
        Strategy storage strategy = strategies[strategyId];
        
        strategy.id = strategyId;
        strategy.creator = msg.sender;
        strategy.name = _name;
        strategy.description = _description;
        strategy.encryptedPrice = _encryptedPrice;
        strategy.encryptedPerformance = _encryptedPerformance;
        strategy.encryptedRisk = _encryptedRisk;
        strategy.encryptedTimestamp = FHE.asEuint64(block.timestamp);
        strategy.isActive = true;
        strategy.purchaseCount = 0;

        userStrategies[msg.sender].push(strategyId);
        totalStrategies++;

        emit StrategyCreated(strategyId, msg.sender, _name, block.timestamp);
    }

    /**
     * @dev Purchase a strategy with encrypted payment
     * @param _strategyId ID of the strategy to purchase
     * @param _encryptedAmount Encrypted payment amount
     */
    function purchaseStrategy(
        uint256 _strategyId,
        euint32 _encryptedAmount
    ) external payable nonReentrant whenNotPaused strategyExists(_strategyId) strategyActive(_strategyId) {
        Strategy storage strategy = strategies[_strategyId];
        require(strategy.creator != msg.sender, "Cannot purchase own strategy");
        require(!strategy.hasPurchased[msg.sender], "Already purchased this strategy");

        // Create purchase record
        uint256 purchaseId = nextPurchaseId++;
        Purchase storage purchase = purchases[purchaseId];
        
        purchase.strategyId = _strategyId;
        purchase.buyer = msg.sender;
        purchase.encryptedAmount = _encryptedAmount;
        purchase.encryptedTimestamp = FHE.asEuint64(block.timestamp);
        purchase.isActive = true;

        // Update strategy
        strategy.hasPurchased[msg.sender] = true;
        strategy.purchaseCount++;

        // Update user data
        userPurchases[msg.sender].push(purchaseId);
        totalPurchases++;

        // Calculate and distribute payment
        uint256 platformFee = (msg.value * platformFeePercentage) / 100;
        uint256 creatorPayment = msg.value - platformFee;
        
        userEarnings[strategy.creator] += creatorPayment;

        // Transfer payments
        payable(strategy.creator).transfer(creatorPayment);
        if (platformFee > 0) {
            payable(owner()).transfer(platformFee);
        }

        emit StrategyPurchased(_strategyId, msg.sender, strategy.creator, block.timestamp);
    }

    /**
     * @dev Update strategy with new encrypted parameters
     * @param _strategyId ID of the strategy to update
     * @param _encryptedPrice New encrypted price
     * @param _encryptedPerformance New encrypted performance score
     * @param _encryptedRisk New encrypted risk score
     */
    function updateStrategy(
        uint256 _strategyId,
        euint32 _encryptedPrice,
        euint32 _encryptedPerformance,
        euint32 _encryptedRisk
    ) external whenNotPaused onlyStrategyCreator(_strategyId) strategyActive(_strategyId) {
        Strategy storage strategy = strategies[_strategyId];
        
        strategy.encryptedPrice = _encryptedPrice;
        strategy.encryptedPerformance = _encryptedPerformance;
        strategy.encryptedRisk = _encryptedRisk;

        emit StrategyUpdated(_strategyId, msg.sender, block.timestamp);
    }

    /**
     * @dev Deactivate a strategy
     * @param _strategyId ID of the strategy to deactivate
     */
    function deactivateStrategy(
        uint256 _strategyId
    ) external whenNotPaused onlyStrategyCreator(_strategyId) strategyActive(_strategyId) {
        strategies[_strategyId].isActive = false;
        
        emit StrategyDeactivated(_strategyId, msg.sender, block.timestamp);
    }

    /**
     * @dev Withdraw earnings for strategy creator
     */
    function withdrawEarnings() external nonReentrant {
        uint256 amount = userEarnings[msg.sender];
        require(amount > 0, "No earnings to withdraw");
        
        userEarnings[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    /**
     * @dev Get strategy information (public data only)
     * @param _strategyId ID of the strategy
     */
    function getStrategyInfo(uint256 _strategyId) external view strategyExists(_strategyId) returns (
        uint256 id,
        address creator,
        string memory name,
        string memory description,
        bool isActive,
        uint256 purchaseCount
    ) {
        Strategy storage strategy = strategies[_strategyId];
        return (
            strategy.id,
            strategy.creator,
            strategy.name,
            strategy.description,
            strategy.isActive,
            strategy.purchaseCount
        );
    }

    /**
     * @dev Get user's strategies
     * @param _user User address
     */
    function getUserStrategies(address _user) external view returns (uint256[] memory) {
        return userStrategies[_user];
    }

    /**
     * @dev Get user's purchases
     * @param _user User address
     */
    function getUserPurchases(address _user) external view returns (uint256[] memory) {
        return userPurchases[_user];
    }

    /**
     * @dev Get user earnings
     * @param _user User address
     */
    function getUserEarnings(address _user) external view returns (uint256) {
        return userEarnings[_user];
    }

    /**
     * @dev Check if user has purchased a strategy
     * @param _strategyId Strategy ID
     * @param _user User address
     */
    function hasUserPurchased(uint256 _strategyId, address _user) external view strategyExists(_strategyId) returns (bool) {
        return strategies[_strategyId].hasPurchased[_user];
    }

    /**
     * @dev Update platform fee percentage (owner only)
     * @param _newFeePercentage New fee percentage (0-100)
     */
    function updatePlatformFee(uint256 _newFeePercentage) external onlyOwner {
        require(_newFeePercentage <= 20, "Fee cannot exceed 20%");
        
        uint256 oldFee = platformFeePercentage;
        platformFeePercentage = _newFeePercentage;
        
        emit PlatformFeeUpdated(oldFee, _newFeePercentage, block.timestamp);
    }

    /**
     * @dev Pause contract (owner only)
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause contract (owner only)
     */
    function unpause() external onlyOwner {
        _unpause();
    }

    /**
     * @dev Emergency withdraw (owner only)
     */
    function emergencyWithdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    /**
     * @dev Get contract statistics
     */
    function getContractStats() external view returns (
        uint256 _totalStrategies,
        uint256 _totalPurchases,
        uint256 _platformFeePercentage,
        uint256 _contractBalance
    ) {
        return (
            totalStrategies,
            totalPurchases,
            platformFeePercentage,
            address(this).balance
        );
    }
}
