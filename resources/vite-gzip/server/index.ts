// https://blog.csdn.net/u012557814/article/details/123264093

import express from 'express';
import path from 'path';
const app = express()
// 静态访问路径
app.use("/static", express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
})