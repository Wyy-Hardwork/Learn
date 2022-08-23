const fs = require("fs");
const p = new Promise(function(resolve, reject) {
    fs.readFile("./test.md",(err,data)=>{
        if(err) reject(err);

        resolve(data)
    })
})
p = then((value)=>{
    console.log(value.toString());
},(reason)=>{
    console.log('失败了!');
})