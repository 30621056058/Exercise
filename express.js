//1.引入
const express = require('express');

//2. 创建应用对象
const app =express();

//3.创建路由
app.get('/',(request,response)=>{
    response.send('成功')
});

// open("http://192.168.1.10:8080");

//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("已经启动")
})