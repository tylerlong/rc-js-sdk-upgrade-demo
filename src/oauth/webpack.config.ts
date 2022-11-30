/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  mode: 'development',
  entry: {
    index1: './src/oauth/index1.ts',
    index2: './src/oauth/index2.ts',
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index1.html',
      chunks: ['index1'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index2.html',
      chunks: ['index2'],
    }),
  ],
};

export default config;
