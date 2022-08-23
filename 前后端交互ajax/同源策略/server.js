const express = require('express');

const app = express();

app.get('/home', (request, response) => {
    // response.setHeader('Access-Control-Allow-Origin', '*')
    // response.setHeader('Access-Control-Allow-Headers', '*')
    //响应一个页面,这次是用127.0.0.1/home直接打开的
    response.sendFile(__dirname + '/index.html');
});

app.get('/data', (request, response) => {
    response.send('用户数据')
})

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('jsonp我来了')这里会报错,因为js解析不了...但是看下面
    // response.send('console.log("我可以被返回!jsonp来了!")');//很疑惑,为什么要打'',文本要打"",不打''直接在这个终端显示了
    const data = {
        name: 'Wyy!'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)//这里用的end,应该是免检测头?
})

app.all('/check-server', (request, response) => {
    // response.send('jsonp我来了')这里会报错,因为js解析不了...但是看下面
    // response.send('console.log("我可以被返回!jsonp来了!")');//很疑惑,为什么要打'',文本要打"",不打''直接在这个终端显示了
    const data = {
        exist: 1,
        msg:'用户名已经存在'
    };
    let str = JSON.stringify(data);
    response.end(`handle(${str})`)//这里用的end,应该是免检测头?
})

app.all('/cors-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('试一试CORS!')
})

app.listen(9000, () => {
    console.log('服务9000已启动')
})


