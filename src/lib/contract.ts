import { useWriteContract, useReadContract } from 'wagmi';
import { StratScrollsSecureABI } from './abi';

// Contract address (will be set after deployment)
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'; // Update after deployment

// FHE encryption utilities for private data
export const encryptPrivateData = async (data: {
  price: number;
  performance: number;
  risk: number;
}) => {
  // In a real implementation, this would use FHE encryption
  // For now, we'll simulate encryption by encoding the data
  return {
    encryptedPrice: data.price.toString(),
    encryptedPerformance: data.performance.toString(),
    encryptedRisk: data.risk.toString(),
  };
};

/**
 * Hook for creating a new strategy
 */
export function useCreateStrategy() {
  const { writeContract, isPending } = useWriteContract();

  const createStrategy = async (args: {
    args: [string, string, string, string, string];
  }) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: StratScrollsSecureABI,
      functionName: 'createStrategy',
      args: args.args,
    });
  };

  return {
    createStrategy,
    isLoading: isPending,
  };
}

/**
 * Hook for purchasing a strategy
 */
export function usePurchaseStrategy() {
  const { writeContract, isPending } = useWriteContract();

  const purchaseStrategy = async (strategyId: bigint, encryptedPayment: string) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: StratScrollsSecureABI,
      functionName: 'purchaseStrategy',
      args: [strategyId, encryptedPayment],
    });
  };

  return {
    purchaseStrategy,
    isLoading: isPending,
  };
}

/**
 * Hook for updating a strategy
 */
export function useUpdateStrategy() {
  const { writeContract, isPending } = useWriteContract();

  const updateStrategy = async (strategyId: bigint, args: [string, string, string, string, string]) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: StratScrollsSecureABI,
      functionName: 'updateStrategy',
      args: [strategyId, ...args],
    });
  };

  return {
    updateStrategy,
    isLoading: isPending,
  };
}

/**
 * Hook for deactivating a strategy
 */
export function useDeactivateStrategy() {
  const { writeContract, isPending } = useWriteContract();

  const deactivateStrategy = async (strategyId: bigint) => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: StratScrollsSecureABI,
      functionName: 'deactivateStrategy',
      args: [strategyId],
    });
  };

  return {
    deactivateStrategy,
    isLoading: isPending,
  };
}

/**
 * Hook for withdrawing earnings
 */
export function useWithdrawEarnings() {
  const { writeContract, isPending } = useWriteContract();

  const withdrawEarnings = async () => {
    return writeContract({
      address: CONTRACT_ADDRESS,
      abi: StratScrollsSecureABI,
      functionName: 'withdrawEarnings',
    });
  };

  return {
    withdrawEarnings,
    isLoading: isPending,
  };
}

/**
 * Hook for reading strategy information
 */
export function useStrategyInfo(strategyId: number) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'getStrategyInfo',
    args: [strategyId],
  });

  return {
    strategyInfo: data,
    isLoading,
    error,
  };
}

/**
 * Hook for reading user strategies
 */
export function useUserStrategies(userAddress: string) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'getUserStrategies',
    args: [userAddress],
  });

  return {
    userStrategies: data,
    isLoading,
    error,
  };
}

/**
 * Hook for reading user purchases
 */
export function useUserPurchases(userAddress: string) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'getUserPurchases',
    args: [userAddress],
  });

  return {
    userPurchases: data,
    isLoading,
    error,
  };
}

/**
 * Hook for reading user earnings
 */
export function useUserEarnings(userAddress: string) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'getUserEarnings',
    args: [userAddress],
  });

  return {
    userEarnings: data,
    isLoading,
    error,
  };
}

/**
 * Hook for checking if user has purchased a strategy
 */
export function useHasUserPurchased(strategyId: number, userAddress: string) {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'hasUserPurchased',
    args: [strategyId, userAddress],
  });

  return {
    hasPurchased: data,
    isLoading,
    error,
  };
}

/**
 * Hook for reading contract statistics
 */
export function useContractStats() {
  const { data, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: StratScrollsSecureABI,
    functionName: 'getContractStats',
  });

  return {
    contractStats: data,
    isLoading,
    error,
  };
}