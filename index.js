const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);


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
    const path = req.url;

    if (path === '/overview' || path === '/') res.end('This is the OVERVIEW');
    else if (path === '/PRODUCT') res.end('This is the PRODUCT');

    else if (path === '/api') {
        res.writeHead(200, { 'Content-type': 'application/json' })
        res.end(data);
    }

    else {
        res.writeHead(404, { 'Content-type': 'text/html', 'my-own-header': 'hello world' });
        res.end('Page not found!');
    };
});

server.listen(8000, '127.0.0.1', () => console.log('Listening to request on port 8000'));