/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config1: Configuration = {
  mode: 'development',
  entry: './src/oauth/index.ts',
  plugins: [new HtmlWebpackPlugin()],
};

export default [config1];
