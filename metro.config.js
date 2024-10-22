const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  cacheVersion: process.env.APP_ENV,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
