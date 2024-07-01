const fs = require('fs');
const data = fs.readFileSync('file.txt');
console.log(""+data.toString());

fs.writeFile('file.txt', '', (err) => {
    console.log("file modified");
});

fs.writeFile('file.txt', 'Hello World!', 'utf-8', (err) => {
    console.log("file modified");
});

fs.appendFile('file.txt', 'class is going on', 'utf-8', (err) => {
    console.log("file modified");
});

fs.mkdir('dir1', (err) => {
    if(err){
        console.log(err);
    } else{
        console.log("Directory created");
    }
})

// fs.rmdir('dir1', (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("Directory deleted");
//     }
// });

// fs.readdir('dir1', (err, files) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log(files);
//     }
// });

const p = '/home/siddham/projects/nodejs-winings/file.txt';
const path = require("path");
const dir = path.dirname(p);
const extension = path.extname(p);
console.log(dir);
console.log(extension);


