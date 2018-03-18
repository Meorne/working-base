const path = require(`path`);
const OptimizeCSSAssets = require(`optimize-css-assets-webpack-plugin`);

module.exports = (env, { mode }) => {
  const config = {
    entry: `./src/app.js`,
    output: {
      path: path.resolve(__dirname, `./public`),
      filename: `./build.js`
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [`babel-loader`, `eslint-loader`]
      },
      {
        test: /\.scss$/,
        use: [`style-loader`, `css-loader`, `sass-loader`, `postcss-loader`]
      }]
    },
    plugins: [],
    devServer: {
      contentBase: path.resolve(__dirname, `./public`),
      historyApiFallback: true,
      inline: true,
      open: true,
      hot: true
    },
    devtool: `eval-source-map`,
    performance: { hints: false }
  };

  if (mode === `production`) {
    config.plugins.push(new OptimizeCSSAssets());
  }

  return config;
};
