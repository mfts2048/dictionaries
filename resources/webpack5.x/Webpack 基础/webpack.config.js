const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 引入插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log("process.env.NODE_ENV=", process.env.NODE_ENV); // 打印环境变量

const config = {
  mode: "none",
  entry: "./src/index.js", // 打包入口地址
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.join(__dirname, "dist"), // 输出文件目录
  },
  devtool: 'source-map',
  module: {
    rules: [
      // 转换规则
      {
        test: /\.js$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(l[ec]|c)ss$/i, //匹配所有的 less/scss/css 文件
        // Loader 的执行顺序是固定从后往前，即按 css-loader --> style-loader 的顺序执行
        use: [
          MiniCssExtractPlugin.loader, // 添加 loader
          "css-loader",
          "postcss-loader",
          "less-loader",
        ], // use: 对应的 Loader 名称
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          // [ext] 自带 "." 这个与 url-loader 配置不同
          filename: "[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024, //超过50kb不转 base64
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: "asset",
        generator: {
          // 输出文件位置以及文件名
          filename: "[name][hash:8][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 超过100kb不转 base64
          },
        },
      },
      // {
      //   test: /\.(jpe?g|png|gif)$/i, // 匹配图片文件
      //   // loader: "file-loader", // 使用 file-loader
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       outputPath: "img",
      //       name: "[name]_[hash:6].[ext]",
      //     },
      //   },
      //   dependency: { not: ["url"] },
      // },
      // {
      //   test: /\.(jpe?g|png|gif)$/i,
      //   loader: "url-loader", // 使用 url-loader
      //   options: {
      //     // 图片大小限制 单位b
      //     limit: 8192,
      //     // 生成的文件的存放目录
      //     name: "resourse/[name].[ext]",
      //   },
      // },
    ],
  },
  plugins: [
    // 配置插件
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(), // 引入插件
    new MiniCssExtractPlugin({
      // 添加插件
      filename: "[name].[hash:8].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true, // 是否启动压缩 gzip
    port: 8080, // 端口号
    // open: true, // 是否自动打开浏览器
  },
};

module.exports = (env, argv) => {
  console.log("argv.mode=", argv.mode); // 打印 mode(模式) 值
  // 这里可以通过不同的模式修改 config 配置
  return config;
};
