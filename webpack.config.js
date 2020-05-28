const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    //入口
    entry: './src/index.js',
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    //loader  包
    module: {
        rules: [
            //解析es6
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            //打包css
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            //打包图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 * 1000,
                        name: '[hash:7].[ext]'
                    }
                }]
            },
            //vue
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }


        ]
    },
    //插件
    plugins: [
        //引入html
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        //清除dist中多余的文件
        new CleanWebpackPlugin(),
        //vue
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/public'),
            to:path.resolve(__dirname,'dist'),
            ignore:['index.html']
        }])

    ],
    //模式
    mode: 'development',
    //错误的位置
    devtool: 'cheap-module-eval-source-map',
    //自动服务
    devServer: {
        port: 8080,
        open: true,
        quiet: true
    },
    //扩展名
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },



};