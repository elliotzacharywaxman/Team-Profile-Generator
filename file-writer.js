const fs = require('fs')

var readMe = fs.readFileSync("index.html",'utf8')
console.log(readMe)
fs.writeFileSync("newTest.html",readMe);