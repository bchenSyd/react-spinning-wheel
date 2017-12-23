const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV;
const config = {
    devtool: env === 'production' ? '' : 'source-map',
    devServer: {
        historyApiFallback: true
    },
    entry: './src/index.js',
    output: {
        libraryTarget: 'umd',
        library: 'react-spinning-wheel',
        filename: 'index.js',
        path: path.resolve('./build/dist'),
    },
    plugins: [
        new ExtractTextPlugin('style.css')
    ],
    module: {
        rules: [ // "style-loader!css-loader!less-loader" can only be used with module.loaders;
            {
                test: /\.jsx?/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader",
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer({
                                        browsers: ['last 2 versions']
                                    })
                                ]
                            }
                        },
                        "less-loader"]
                })
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        fallback: 'file-loader',
                        limit: 10000,
                    },
                }],
            },
        ]
    },
    resolve: {
        alias: {
            "react-components": path.resolve('../src/index.js'),
        }
    }
};

if (env === 'production') {
    config.plugins.push(new UglifyJSPlugin());
} else {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}
module.exports = config