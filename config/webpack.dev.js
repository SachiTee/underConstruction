const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const proxy = require('http-proxy-middleware');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const merge = require('lodash/merge');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('build'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    performance: {
        hints: false
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});