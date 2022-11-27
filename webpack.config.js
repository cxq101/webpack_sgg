const path = require("path");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // 入口
    entry: "./src/index.js",
    // 输出
    output: {
        // path 文件输出目录 必须返回绝对路径
        // __dirname 当前文件的文件夹绝对路径
        path: path.resolve(__dirname, "dist"),
        // 输出文件名
        filename: "src/bundle.js",
        // 输出前删除目录下的所有文件
        clean: true,
    },
    // 加载器 loader
    module: {
        rules: [
            // css
            {
                // 用来匹配 css结尾的文件
                test: /\.css$/,
                // use 数组里面 Loader 执行的顺序为从右到左 倒叙
                use: ["style-loader", "css-loader"],
            },
            // image
            {
                test: /\.(png|jpe?g|gif|webp)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024,// 小于10kb的图片都会base64处理
                    }
                },
                generator: {
                    // 将图片文件输出到static image 目录下
                    // 命名格式 哈希值 原扩展名 查询参数
                    // [hash:8] 哈希值取前八位
                    // [ext] 使用源文件的文件扩展名
                    // [query]添加之前的query参数
                    filename: "resource/image/[hash:8][ext][query]",
                }
            },
            // ttf
            {
                // test: /\.(ttf|woff2?)$/,
                test: /\.(ttf|woff2?|map3|map4|avi)$/,
                // type: "asset/resource"和type: "asset"的区别：
                // type: "asset/resource" 相当于file-loader, 将文件转化成 Webpack 能识别的资源，其他不做处理
                // type: "asset" 相当于url-loader, 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式
                type: "asset/resource", 
                generator: {
                    // 将图片文件输出到static image 目录下
                    // 命名格式 哈希值 原扩展名 查询参数
                    // [hash:8] 哈希值取前八位
                    // [ext] 使用源文件的文件扩展名
                    // [query]添加之前的query参数
                    filename: "resource/font/[hash:8][ext][query]",
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    // 插件
    plugins: [
        new EslintWebpackPlugin({
            // 指定检查文件的根目录
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
        }),
    ],
    // 模式  development  production
    // mode: "development",
    mode: "production",
};