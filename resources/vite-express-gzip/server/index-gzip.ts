import express from 'express';
import compression from 'compression' // #先安装 compression
import path from 'path';
const app = express()

// 1. 使用 compression 中间件压缩资源
app.use(compression({ filter: shouldCompress }))

// 2. 使用过滤器，判断哪些资源需要压缩
function shouldCompress(req: express.Request, res: express.Response) {
    // 2.1 如果请求 gzip 资源，跳过压缩，比如 /js/bundle.js.gz
    if (req.path.indexOf('.gz') !== -1) {
        res.set('Content-Encoding', 'gzip') // 告诉浏览器服务器端返回 gzip 格式的资源
        return false
    }
    /* 2.2 如果请求非 gzip 资源，比如 /js/bundle.js, 则 compression 会自动帮我们压缩它并添加 Content-Encoding 为 gzip */
    return compression.filter(req, res)
}

// 静态访问路径
app.use("/static", express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})