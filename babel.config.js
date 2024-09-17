module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Ensure the module-resolver plugin is properly structured
      [
        'module-resolver',
        {
          root: ['./'], // Root directory
          alias: {
            '@app': './app',
            '@assets': './assets',
            '@components': './components',
            '@lib': './lib',
          },
        },
      ],
    ],
  };
};
