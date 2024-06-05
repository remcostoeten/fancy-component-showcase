// utils/environmentUtils.ts

/**
 * Determines if the current environment is production.
 *
 * @returns True if the environment is production, otherwise false.
 */
export const isProductionEnvironment = (): boolean => {
  return process.env.NODE_ENV === "production";
};
