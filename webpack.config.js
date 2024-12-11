const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"), // 这里指定了服务的根目录
    },
    compress: true,
    port: 9000,
    hot: true, // 启用模块热替换
    open: true, // 启动时自动打开浏览器
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(webp|jpg|jpeg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images/", // 指定输出的文件夹
            name: "[name].[hash:8].[ext]", // 保持文件名和扩展名，添加哈希值以避免缓存问题
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/public/index.html",
      chunks: ["main"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/images"),
          to: path.resolve(__dirname, "./dist/images"),
        },
      ],
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;
