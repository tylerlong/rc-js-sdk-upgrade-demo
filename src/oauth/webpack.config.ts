/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-import */
import {Configuration, DefinePlugin} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import dotenv from 'dotenv-override-true';

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
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    fallback: {
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
};

export default config;
