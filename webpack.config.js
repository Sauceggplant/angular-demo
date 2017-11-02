const webpack = require('webpack'); //引入webpack
const path = require('path'); //上下文路径
const autoprefixer = require('autoprefixer');
const cleanWebpackPlugin = require('clean-webpack-plugin'); //清除构建插件
const htmlWebpackPlugin = require('html-webpack-plugin'); //html插件
const extractTextPlugin = require("extract-text-webpack-plugin"); //代码分割插件
const copyWebpackPlugin = require('copy-webpack-plugin');
var dev = process.env.NODE_ENV === 'dev', //发布环境
    pro = process.env.NODE_ENV === 'pro', //发布环境
    publicPath = ''; //公共路径,资源引用统一前缀
devtool = ''; //source-map
var loaders = [{ //图片资源
        test: /\.(png|jpg|jpeg|gif|ico|icns)$/,
        loader: 'url-loader?limit=8192&name=images/[name].[chunkhash].[ext]'
    }, { //字体资源
        test: /\.(eot|svg|ttf|otf|ttc|woff|woff2)$/,
        loader: 'file-loader?name=font/[name].[ext]'
    },{
        test: /\.html$/,
        loader: 'html-withimg-loader'
    },{
        test:/\.css$/,
        use:extractTextPlugin.extract({fallback:"style-loader",use:["css-loader"]}),
    }],
    plugins = [
        new cleanWebpackPlugin(['dist'], { //清除构建
            root: '',
            verbose: true,
            dry: false
        }),
        new webpack.ProvidePlugin({ //jquery的$和jQuery
            $: "jquery",
            jQuery: "jquery",
            jquery: "jquery"
        }),
        new htmlWebpackPlugin({ //html插件
            cache: true,
            compile: true,
            filename: 'index.html',
            hash: true,
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            },
            showErrors: true,
            template: path.resolve(__dirname, 'src/index.html'),
            xhtml: false
        }),
        new extractTextPlugin({ //css插件
            filename: 'css/[name].[hash:6].css',
            allChunks: true
        }),
        new copyWebpackPlugin([{
            from: 'package.json'
        }], {
            ignore: [],
            copyUnmodified: true,
            debug: "debug"
        })
    ];
if (dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    //publicPath = 'http://127.0.0.1:8080/';
} else if (pro) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false //产品模式js压缩
        }
    }));
    //publicPath = 'http://127.0.0.1:8080/';
}
var config = {
    //入口配置
    entry: {
        app: path.resolve(__dirname, 'src/js/app.js')
    },
    //输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:6].js',
        publicPath: publicPath
    },
    //本地服务配置
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    //模块配置
    module: {
        loaders: loaders
    },
    //插件配置
    plugins: plugins
};
module.exports = config;