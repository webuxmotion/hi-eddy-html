const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const { readdirSync, readFileSync } = require('fs');

const exportFiles = [
  './components/modal/export.js',
  './components/faq/export.js',
  './components/copy-button/export.js',
  './js/events.js'
];

const files = [];

files.push('css/reset.css');
files.push('css/style.css');
files.push('css/layout.css');
files.push('css/global.css');

const getPages = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(direct => direct.isDirectory())
    .map(direct => {
      files.push('pages/' + direct.name + '/' + direct.name + '.css');
    });
const getComponents = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(direct => direct.isDirectory())
    .map(direct => {
      files.push('components/' + direct.name + '/' + direct.name + '.css');
    });

getPages('pages');
getComponents('components');

module.exports = {
  mode: 'production',
  entry: {
    styles: files.map(el => path.resolve(__dirname, el)),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new MergeIntoSingleFilePlugin({
      files: {
          "main.js": exportFiles.map(el => {
            return path.resolve(__dirname, el)
          }),
      }
  }),
  ],
};
