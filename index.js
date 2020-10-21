const fs = require('fs');
const http = require('http');
const url = require('url');

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) return console.log('ERROR! *')

//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, 'utf-8', err => console.log('Your file has been written :)'));
//         });
//     });
// });

// console.log('Will read file!');

const server = http.createServer((req, res) => {
    if (rest.url === '/overview' || rest.url === '/') res.end('This is the OVERVIEW');
    else if (rest.url === '/PRODUCT') res.end('This is the PRODUCT');
    else {
        res.writeHead(404, { 'Content-type': 'text/html', 'my-own-header': 'hello world' });
        res.end('Page not found!');
    };
});

server.listen(8000, '127.0.0.1', () => console.log('Listening to request on port 8000'));