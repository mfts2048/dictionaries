# webpack5.x

## 参考

> https://juejin.cn/post/7023242274876162084

### webpack5 file-loader 导致 background-image 图片无法正常显示

> https://blog.csdn.net/weixin_46787030/article/details/125362672

## webpack 打包的项目中同时使用了 css 和 less 文件，加了 speed-measure-webpack-plugin 后为什么会出现这样的报错？

> https://blog.csdn.net/u011024243/article/details/125282234

1. 直接弃用 spm, 使用 webpack 自带的

2. 对 miniCssExtractPlugin 进行版本回退，卸载重装@1.3.6 版本也可以正常使用

   `npm i mini-css-extract-plugin@1.3.6 -D`
