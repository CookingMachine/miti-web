'use strict';
const path = require('path');
const webpack = require('webpack')
const tsNameof = require("ts-nameof");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = (env) => {
    const environment = env && env.NODE_ENV || 'dev';

    return {
        devtool: 'inline-source-map',
        entry: './src/index.tsx',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [{
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: () => ({ before: [tsNameof] })
                        }
                    }]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /node_modules/,
                    loader: [
                      'style-loader',
                      'css-loader',
                      'sass-loader'
                    ]
                },
                {
                    test: /\.(jpg|png)$/,
                    loader: ['url-loader'],
                },
            ]
        },
        resolve: {
            extensions: [ '.ts', '.tsx', '.js', '.scss'],
            alias: {
                ['components']: path.resolve(__dirname, 'src/components'),
                ['styles']: path.resolve(__dirname, 'src/styles'),
                ['store']: path.resolve(__dirname, 'src/store'),
                ['consts']: path.resolve(__dirname, 'src/consts'),
            }
        },
        devServer: {
            historyApiFallback: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new ErrorOverlayPlugin(),
            new webpack.DefinePlugin({
                __API__: JSON.stringify('http://localhost:8080/'),
                __ENV__: JSON.stringify(environment)
            })
        ]
    }
}