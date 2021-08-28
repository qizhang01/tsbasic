const baseWebpackConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const portfinder = require('portfinder');
const config = require('./config');
const merge = require('webpack-merge');

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash:8].js',
    },
    module: {
        rules: [
            {
                oneOf: []
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: config.indexPath,
            minify: {
                html5: true
            },
            hash: false
        }),

        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        ...config.devServer
    },
    stats: {
        colors: true,
        children: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        builtAt: false,
        entrypoints: false,
        assets: false,
        version: false
    }
});

module.exports = devWebpackConfig

