//引入express
const express = require('express') ;
//创建应用对象
const app = express() ;
//创建路由规则
app.get('/ie',(request,response)=>{
    //request请求报文封装
    //response响应报文封装
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //设置响应体
    response.send('回应我吧响应体get!  顺便测试nodemon IE')//ie老版浏览器加时间戳来实现更新
});

//延迟响应规则
app.get('/delay',(request,response)=>{
    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {    //设置响应体
        response.send('太卡了')
    },2000)

});

app.all('/axios-server',(request,response)=>{
    //request请求报文封装
    //response响应报文封装

    //设置响应头,设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*')
    //设置响应体
    // response.send('回应我吧响应体post!')
    //响应一个json数据
    const data = {
        name: 'Wyy'
    }
    let str = JSON.stringify(data);
    response.send(str);
});

//fetch服务
app.all('/fetch-server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个json数据
    const data = {
        name: 'Wyy'
    }
    let str = JSON.stringify(data);
    response.send(str);
});

//监听端口
app.listen(8000,()=>{
    console.log('服务器8000启动')
})