const { createMetroConfiguration } = require('expo-yarn-workspaces');

const config = createMetroConfiguration(__dirname);

module.exports = (async () => {
  return {
    ...config,
    transformer: {
      ...config.transformer,
      babelTransformerPath: require.resolve('react-native-sass-transformer'),
    },
  };
})();
