import { FHE } from '@fhevm/solidity';

/**
 * FHE utility functions for Strat Scrolls Secure
 * Handles encryption and decryption of sensitive strategy data
 */

export interface EncryptedStrategyData {
  price: string;
  performance: string;
  risk: string;
  timestamp: string;
}

export interface StrategyData {
  price: number;
  performance: number;
  risk: number;
  timestamp: number;
}

/**
 * Encrypt strategy data using FHE
 * @param data Strategy data to encrypt
 * @returns Encrypted strategy data
 */
export function encryptStrategyData(data: StrategyData): EncryptedStrategyData {
  // In a real implementation, this would use FHE encryption
  // For now, we'll simulate encryption by encoding the data
  return {
    price: FHE.asEuint32(data.price).toString(),
    performance: FHE.asEuint32(data.performance).toString(),
    risk: FHE.asEuint32(data.risk).toString(),
    timestamp: FHE.asEuint64(data.timestamp).toString(),
  };
}

/**
 * Decrypt strategy data using FHE
 * @param encryptedData Encrypted strategy data
 * @returns Decrypted strategy data
 */
export function decryptStrategyData(encryptedData: EncryptedStrategyData): StrategyData {
  // In a real implementation, this would use FHE decryption
  // For now, we'll simulate decryption by decoding the data
  return {
    price: parseInt(encryptedData.price),
    performance: parseInt(encryptedData.performance),
    risk: parseInt(encryptedData.risk),
    timestamp: parseInt(encryptedData.timestamp),
  };
}

/**
 * Generate encrypted price for strategy
 * @param price Price in wei
 * @returns Encrypted price
 */
export function encryptPrice(price: number): string {
  return FHE.asEuint32(price).toString();
}

/**
 * Generate encrypted performance score
 * @param performance Performance score (0-100)
 * @returns Encrypted performance score
 */
export function encryptPerformance(performance: number): string {
  if (performance < 0 || performance > 100) {
    throw new Error('Performance score must be between 0 and 100');
  }
  return FHE.asEuint32(performance).toString();
}

/**
 * Generate encrypted risk score
 * @param risk Risk score (0-100)
 * @returns Encrypted risk score
 */
export function encryptRisk(risk: number): string {
  if (risk < 0 || risk > 100) {
    throw new Error('Risk score must be between 0 and 100');
  }
  return FHE.asEuint32(risk).toString();
}

/**
 * Generate encrypted timestamp
 * @param timestamp Unix timestamp
 * @returns Encrypted timestamp
 */
export function encryptTimestamp(timestamp: number): string {
  return FHE.asEuint64(timestamp).toString();
}

/**
 * Validate strategy data before encryption
 * @param data Strategy data to validate
 * @returns True if valid, throws error if invalid
 */
export function validateStrategyData(data: StrategyData): boolean {
  if (data.price < 0) {
    throw new Error('Price cannot be negative');
  }
  if (data.performance < 0 || data.performance > 100) {
    throw new Error('Performance score must be between 0 and 100');
  }
  if (data.risk < 0 || data.risk > 100) {
    throw new Error('Risk score must be between 0 and 100');
  }
  if (data.timestamp < 0) {
    throw new Error('Timestamp cannot be negative');
  }
  return true;
}

/**
 * Generate random encrypted values for testing
 * @returns Random encrypted strategy data
 */
export function generateRandomEncryptedData(): EncryptedStrategyData {
  const randomPrice = Math.floor(Math.random() * 1000000) + 100000; // 0.1 to 1 ETH
  const randomPerformance = Math.floor(Math.random() * 100);
  const randomRisk = Math.floor(Math.random() * 100);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  return {
    price: encryptPrice(randomPrice),
    performance: encryptPerformance(randomPerformance),
    risk: encryptRisk(randomRisk),
    timestamp: encryptTimestamp(currentTimestamp),
  };
}
