const fs = require('fs');
// const data = fs.readFileSync('file.txt');
// const path = require("path");
// console.log(""+data.toString());
//
// // fs.writeFile('file.txt', 'Hello World!', (err) => {
// //     console.log("file modified");
// // });
//
// // fs.writeFile('file.txt', 'Hello World!', 'utf-8', (err) => {
// //     console.log("file modified");
// // });
// //
// // fs.appendFile('file.txt', 'class is going on', 'utf-8', (err) => {
// //     console.log("file modified");
// // });
// //
// // fs.mkdir('dir1', (err) => {
// //     if(err){
// //         console.log(err);
// //     } else{
// //         console.log("Directory created");
// //     }
// // })
//
// // fs.rmdir('dir1', (err) => {
// //     if(err){
// //         console.log(err);
// //     } else{
// //         console.log("Directory deleted");
// //     }
// // });
//
// // fs.readdir('dir1', (err, files) => {
// //     if(err){
// //         console.log(err);
// //     } else{
// //         console.log(files);
// //     }
// // });
//
// // const p = '/home/siddham/projects/nodejs-winings/file.txt';
//
// // const dir = path.dirname(p);
// // const extension = path.extname(p);
// // console.log(dir);
// // console.log(extension);
//
// // fs.mkdir('dir2', (err) => {
// //     if(err){
// //         console.log(err);
// //     } else{
// //         console.log("Directory created");
// //     }
// // });
//
// const filePath = path.join(__dirname, 'file.txt');
// const dest = path.join(__dirname, 'dir2', 'file.txt');
// console.log(filePath);
// console.log(dest);
// fs.copyFile(filePath, dest, (err) => {
//     if(err){
//         console.log(err);
//     } else{
//         console.log("File copied");
//     }
// });

const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/login') {
        res.write('<html lang="en"><head><title>Login Page</title></head>');
        res.write('<body><h1>Hello Login</h1></body></html>');
    } else if(req.url === '/index'){
        fs.readFile('index.html', 'utf-8', (err, data) => {
            if(err){
                console.log(err);
            } else{
                res.write(data);
            }
            res.end();
        });
    } else {
        res.write('<html lang="en"><head><title>NodeJS Class</title></head>');
        res.write('<body><h1>Hello World</h1></body></html>');
    }
});
const port = 3000;
const host = 'localhost';
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});


