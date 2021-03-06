const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
    // Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/src/app/app.js'),
    ],
    // Server Configuration options
    devServer: {
        contentBase: 'src/www', // Relative directory for base of server
        devtool: 'source-map',
        hot: true, // Live-reload
        inline: true,
        port: 3000, // Port Number
        host: '0.0.0.0', // Change to '0.0.0.0' for external facing server
    },
    output: {
        path: buildPath, // Path of output file
        filename: 'app.js',
    },
    // resolve: {
    //     alias: {
    //         'amazeui-react': path.join(__dirname, 'node_modules/amazeui-react/lib/')
    //     }
    // },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'www'},
        ], path.resolve(__dirname, 'src')),
    ],
    module: {
        loaders: [
            {
                // React-hot loader and
                test: /\.js$/, // All .js files
                loaders: ['react-hot', 'babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
                exclude: [nodeModulesPath],
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    'less'
                ]
                //,include: [
                //    path.join(__dirname, '/src/app/')
                //]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ],
    },
};

module.exports = config;