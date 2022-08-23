//引入express
const express = require('express') ;
//创建应用对象
const app = express() ;
//创建路由规则
app.get('/',(request,response)=>{
    //request请求报文封装
    //response响应报文封装
    response.send('回应我吧!');
});

//监听端口
app.listen(8000,()=>{
    console.log('服务器8000启动')
})