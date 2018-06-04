import webpack from 'webpack';
import path from 'path';

export default {
    entry: {
        fromEvent: './fromEvent/index.js',
        combineLatest: './combineLatest/index.js',
    },
    output: {
        path: path.resolve(__dirname),
        publicPath: '/',
        filename: '[name]/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015']
                    }
                }
            }
        ]
    }
}