// const fs = require('fs');
// const http = require('http');
// const url = require('url');

// //Requiring 3rd party modules:
// const slugify = require('slugify');

// const replaceTemplate = require('./modules/replaceTemplate');

// //Blocking, synchronous way
// // const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);
// // const newText = `This is the new Mexican Avocado: ${textIn}. \nCreated in ${Date.now()}`;
// // fs.writeFileSync("./txt/newTXT.txt", newText);

// //Non-Blocking, Asynchronous way
// // fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
// //   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
// //     console.log(data2);
// //     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
// //       console.log(data3);
// //       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
// //         console.log("been read ☺");
// //       });
// //     });
// //   });
// // });

// ///////////////////////////////
// ///// Creating web server /////
// // const server = http.createServer((req, res) => {
// //   res.end("hello from the server");
// // });

// // server.listen(8000, "127.0.0.1", () => {
// //   console.log("listening to request on port 8000");
// // });

// ///////////////////////////////
// ////Getting Access to Data////

// const tempOverview = fs.readFileSync(
//   `${__dirname}/templates/template-overview.html`,
//   'utf-8'
// );
// const tempProduct = fs.readFileSync(
//   `${__dirname}/templates/template-product.html`,
//   'utf-8'
// );
// const tempCard = fs.readFileSync(
//   `${__dirname}/templates/template-card.html`,
//   'utf-8'
// );

// const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// const dataObj = JSON.parse(data);

// const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));

// console.log(slugs);

// /////////////////////
// ///// Routing  /////
// const server = http.createServer((req, res) => {
//   const { query, pathname } = url.parse(req.url, true);

//   //Overview
//   if (pathname === '/' || pathname === '/overview') {
//     res.writeHead(200, { 'Content-type': 'text/html' });

//     const cardsHtml = dataObj
//       .map((el) => replaceTemplate(tempCard, el))
//       .join('');
//     const output = tempOverview.replace('{%PRODUCT_OVERVIEW%}', cardsHtml);

//     res.end(output);

//     //Product
//   } else if (pathname === '/product') {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     const product = dataObj[query.id];
//     const output = replaceTemplate(tempProduct, product);
//     res.end(output);

//     //API
//   } else if (pathname === '/api') {
//     res.writeHead(200, { 'Content-type': 'application/json' });
//     res.end(data);

//     //Page not found
//   } else {
//     res.writeHead(404);
//     res.end('page not found');
//   }
// });

// server.listen(8000, '127.0.0.1', () => {
//   console.log('listening to port 8000');
// });

console.log('Start');

function synchronousTask() {
  console.log('Task 1');
  console.log('Task 2');
}

synchronousTask();

console.log('End');
