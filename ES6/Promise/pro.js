// const p = new Promise(function (resolve, reject) {
//     fs.readFile('test.md', (err, data) => {
//         //如果失败
//         if (err) reject(err);
//         //如果成功
//         resolve(data)
//     })
// })//promise封装的function
// p.then(function (value) {
//     console.log(value.toString());
// }, function (reason) {
//     console.error('读取失败!')
// })//成功调第一个,失败调第二个

const p = new Promise((resolve, reject) => {
    fs.readFile('test.md', (err, data) => {
        resolve(data)
    })
})
p.then(value=>{
    // console.log(value.toString());
    return new Promise((resolve, reject) => {
    fs.readFile('test1.md', (err, data) => {
        resolve(value,data)
})
    })
})
