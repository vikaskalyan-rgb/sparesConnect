module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-runtime', {
      helpers: true,
      regenerator: true,
    }],
    '@babel/plugin-proposal-async-generator-functions',
  ],
};