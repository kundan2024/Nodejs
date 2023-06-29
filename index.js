// var a =10;
// var b=20;
// var c=40;
// console.log(a+b+c)

// const { StyledEngineProvider } = require("@mui/material")
// const { default: mongoose } = require("mongoose")

// const { modalUnstyledClasses } = require("@mui/material")

// const app = require('./app')

// const arr=[2, 4, 7, 1, 3, 8, 3];
// console.log(app.y)
// console.log(app.z())

// const app = require('./app')

// const arr=[2, 4, 7, 1, 3, 8, 3];

// arr.filter((item)=>{
//     console.log(item)
// })

// let result = arr.filter((item)=>{
//     return item>=4
// })
// console.warn(result)

// FILE SYSTEM MODULE

// const fs = require('fs')
// fs.writeFileSync("hello.txt", "kundan kumar")
// console.log(__dirname)   // for printing current directory
// console.log(__filename) // showing along with file name

// importing particular file
// const gs = require('fs').writeFileSync;
// gs("xyz.txt", "abc")

// making basic server

// const http = require('http') // http handles request and response in node js

// http.createServer((req, resp)=>{   // create server function can take varable or function as parameter
//     resp.write("<h1>Hello this is kundan kumar</h1>");
//     resp.end();
// }).listen(4500);

// const http = require('http') // http handles request and response in node js

// function test(a){
//     return a*10;
// }

// const test1=(a)=>a*100

// const dataControl = (req, resp) =>
// {
//     resp.write("<h1>Hello, This is kundan kumar from CSE</h1>")
//     resp.end();
// }

// http.createServer(dataControl).listen(4500);

/// PACKAGE.JSON FILE => CONTAINS INFORMATION ABOUT THE PROJECT REALTED TO CODING

//................******..................

// const colors = require('colors');
// console.log("hello".green)

//.....................*********............

//    VVI NOTES.........
//  1. 'npm install' to install all packages and node modules
//  2. '.gitignore' make this files and insert the name of all the files which need not to be pushed
//  3.  node modules need not to be pushed on git

//...............***************........................................

//................**************************.............................
//Nodemon package helps to run the code automatically or continuously

// console.log("time saving by nodemon")
// console.log(10+20)

//................**************************..............................

//................**************************..............................
//MAKE A SIMPLE API
// const http = require('http');
// http.createServer((req, resp)=>{
//     resp.writeHead(200, {'Content-Type' : 'application\ json'});
//     resp.write(JSON.stringify({name : 'Kundan kumar', email : 'kundan@gmail.com'})); //body
//     resp.end()
// }).listen(5000);

//................**************************..............................

//................**************************..............................
// saving data in another file and then calling it from another file
// const http = require('http');
// const data = require('./data');

// //createServer takes innput as callback function
// http.createServer((req, resp) => {
//     resp.writeHead(200, {'Content-Type' : 'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end();
// }).listen(5200);
//................**************************..............................

//................**************************..............................
//INPUT FROM COMMAND LINE
// console.log(process)
// console.log(process.argv); // isme phla do fix hota hai baki  terminal par likhne par wo bhi print ho jata hai as an array
// console.log(process.argv[2])

//................**************************..............................
//continue....
// const fs = require('fs');
// const input = process.argv;

// fs.writeFileSync(input[2], input[3]);

//................**************************..............................

//................**************************..............................
// Removing files from terminal

// const fs = require('fs');
// const input = process.argv;

// if(input[2] == 'add'){
//     fs.writeFileSync(input[3], input[4]); // add filename at index 3 and content at index 4
// }
// else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]) // remove files at index 3
// }
// else{
//     console.log('invalid input');
// }
//................**************************..............................

//................**************************..............................
// SHOW FILE LIST :  made a new folder files
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname); //  __dirname gives current directory path
// console.log(dirPath);

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files'); //  gives path of files directory
// console.log(dirPath);

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for(i=0;i<5;i++){ // creating 5 files
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file");
// }

//................**************************..............................
//continue..... : show files list
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log(item);
//     })
// })

//................**************************..............................

//................**************************..............................
//CRUD WITH FILE SYSYTEM :  isme ek folder banaye haii crud naam ka

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple2.txt`;
// fs.writeFileSync(filePath, "This is a simple file")

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple2.txt`;

// fs.readFile(filePath,  (err, item) => { // is tarh se likhne par <buffer and hexadecimal value print hoha, isko resole karne ke liye utf8 use krte hai
//     console.log(item)
// })

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple2.txt`;

// fs.readFile(filePath, 'utf8',  (err, item) => {
//     console.log(item)
// })

// updating file

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple2.txt`;

// fs.appendFile(filePath, ' and file name is apple2.txt', (err) => {
//     if(err == false) { // matlab error nhi hai to
//         console.log('file updated successfully');
//     }
// })

//rename operation on file

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple2.txt`;

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if(err == false){
//         console.log('file is renamed successfully');
//     }
// })

// delete file

// const fs = require('fs');
// const path =  require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/fruit.txt`;

// fs.unlinkSync(filePath);

//................**************************..............................

//................**************************..............................
// ASYNCHRONOUS BASICS
//   -> in asynchronous operations second task do not wait to finish the first task . eg. js, node
//   -> in synchronous operations tasks are performed one at a time. e.g. php
// e.g.
//  users, products and clients are three functions
// users load then only products load  ==> synchronous
// users taking time in loading then products not wait for users to load but products starts loading and so on......

// code e.g.

// console.log('start exe......');
// console.log('logic exe.......');
// console.log('complete exe......');

// console.log('start exe......');
// setTimeout(()=>{
//     console.log('logic exe.......');
// }, 2000)
// console.log('complete exe......');

//................**************************..............................

//................**************************..............................
// HANDLE ASYNCHRONOUS DATA IN NODE JS
// let a=10;
// let b=0;
// setTimeout(()=>{
//     b=20;
// }, 2000);
// console.log(a+b);  // it will print 10 and not 30 b/c updating of b done after 2 second

// this problem is resolves by using 'Promise'

// let a=10;
// let b=0;
// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30);
//     }, 2000);
// })
// waitingData.then((data)=>{
//     b=data
//     console.log(a+b);
// })

//................**************************..............................

//................**************************..............................
//CALL STACK,  NODE API, CALLBACK QUEUE => THIS THREE CONSTITUE EVENT LOOP
// console.log('starting up');

// setTimeout(()=>{
//     console.log('2 second log');
// }, 2000)

// setTimeout(() => {
//     console.log('0 second log');
// }, 0);

// console.log('finishing up');

// isme finishing up ke baad me o log wala print hoga b/c 0 log wala phle node api me register hoga as isettimeout written in c/c++ and anything written inn except core lang i.e. js goes to first node api

//................**************************..............................

//          EXPRESS js

//................**************************..............................
// Express JS :  its a frame work of node js just like angular of javascript

// const express = require('express');
// const app = express();

// // making a home page
// app.get('', (req, resp) => { // get method provides routes. get method ke phla parameter hota hai route,. yha '' khali rhne diye hai matlab home
//     resp.send('hello, this is home page');
// })

// // about us page
// app.get('/about', (req, resp) => { // route banane ke liye / lagana hota hai
//     resp.send('Hello, this is about page');
// })

// app.listen(4300);

// SHOWING DATAA COMING THROUGH REQUEST

// const express = require('express');
// const app = express();

// // making a home page
// app.get('', (req, resp) => { // get method provides routes. get method ke phla parameter hota hai route,. yha '' khali rhne diye hai matlab home
//     console.log('data sent by browser -> ', req.query.name
//     );
//     resp.send('Welcome, '+req.query.name);
// })

// app.listen(4300);

//................**************************..............................

//................**************************..............................
//RENDER HTML AND JSON and using liks

// const express = require('express');
//     const app = express();

//     // making a home page
//     app.get('', (req, resp) => { // get method provides routes. get method ke phla parameter hota hai route,. yha '' khali rhne diye hai matlab home
//         resp.send('<h1>hello, this is home page</h1>');
//     })

//     // about us page
//     app.get('/about', (req, resp) => { // route banane ke liye / lagana hota hai
//         // use backticks to write in normal html
//         resp.send(`
//         <input type = 'text' placeholder = 'user name' />
//         <button> Click Me </button>
//         `);
//     });

//     // rendering json data
//     app.get('/help', (req, resp) => {
//         resp.send({
//             name : 'kundan',
//             email : 'kundan@gmail.com',
//             address : 'nalanda'
//         })
//     })

//     // to show json data for more than one user we use an array to include all the object into one i.e make array of objects

//     app.get('/help1', (req, resp) => {
//         resp.send([{
//             name : 'kundan',
//             email : 'kundan@gmail.com',
//             address : 'nalanda'
//         },
//         {
//             name : 'deepanshu',
//             email : 'deepu@gmail.com',
//             address : 'bhagalpur'
//         },
//     ])
//     })

//     app.listen(4300);

//USING LINKS

// const express = require('express');
//     const app = express();

//     // making a home page
//     app.get('', (req, resp) => { // get method provides routes. get method ke phla parameter hota hai route,. yha '' khali rhne diye hai matlab home
//         resp.send(`
//         <h1>Welcome, to HOME Page</h1> <a href='/about'> Go to About Page</a>
//         `);
//     })

//     // about us page
//     app.get('/about', (req, resp) => { // route banane ke liye / lagana hota hai
//         // use backticks to write in normal html
//         resp.send(`
//         <input type = 'text' placeholder = 'user name' value="${req.query.name}" />
//         <button> Click Me </button>
//         <a href='/'> Go to Home Page</a>
//         `);
//     });

//     // rendering json data
//     app.get('/help', (req, resp) => {
//         resp.send({
//             name : 'kundan',
//             email : 'kundan@gmail.com',
//             address : 'nalanda'
//         })
//     })

//     app.get('/help1', (req, resp) => {
//         resp.send([{
//             name : 'kundan',
//             email : 'kundan@gmail.com',
//             address : 'nalanda'
//         },
//         {
//             name : 'deepanshu',
//             email : 'deepu@gmail.com',
//             address : 'bhagalpur'
//         },
//     ])
//     })

//     app.listen(4300);

//................**************************..............................

//................**************************..............................
//MAKE HTML PAGES
/*
-> MAKE FOLDER FOR HTML FILE AND ACCESS IT
-> MAKE HTML FILES
->LOAD HTML FILES
->INTERVIEW QUESTIONS
*/

// const  express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, 'public');

// app.use(express.static(publicPath));   //loads static page or simply we can say express.static wala se public folder acces  ho rha hai. its is loading static content e.g. about.html,  etc

// app.listen(4300);

//................**************************..............................

//................**************************..............................
// REMOVE EXTENSION FROM URL
/*
->APPLY GET METHOD
->REMOVE AN EXTENSION FROM URL e.g. index.html changes to inly index
-> MAKE 404 PAGE
-> APPLY 404 PAGE*/

// const express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, 'public');

// yha par hum express.static use nhi karenge balki app.get use karenge
// app.use(express.static(publicPath));

// app.get('', (req, resp) => {
//     //since we have to send to file we will use sendFile and not send
//     resp.sendFile(`${publicPath}/index.html`);
// });

// app.get('/aboutme', (req, resp) => {
//     //since we have to send to file we will use sendFile and not send
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get('/help', (req, resp) => {
//     //since we have to send to file we will use sendFile and not send
//     resp.sendFile(`${publicPath}/help.html`);
// });

// // IF ENTERRED ROUTE IS NOT PRESENT THEN WE MAKE A '*' ROUTE WHICH WILL RUN IN CASE NO PAGE OR ROUTE MATCHES
// app.get('*', (req, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(4300);

//................**************************..............................

//................**************************..............................
//TEMPLATE ENGINE
/*
->WHAT IS TEMPLATE ENGINE : used to make dynamic pages (data datbase se uthkar aate hai)
->INSTALL ejs TEMPLATE PACKAGE
->SET UP DYNAMIC ROUTING
->MAKE DYNAMIC PAGE
*/

// const express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, 'public');

// // template engine use karne ke liye 'views' folder banana padta hai
// // 'ejs' use karne ke liye node js ko batana padta hai ki ejs use karne walw hain
// app.set('view engine', 'ejs');

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile', (req, resp) => {
//     const user = {
//         name : 'kundan kumar',
//         email : 'kundan@gmail.com',
//         city : 'nalanda'
//     }
//     resp.render('profile',{user} );
// })

// app.listen(4300);

//................**************************..............................

//................**************************..............................
//DYNAMIC PAGE
/*
->HOW TO MAKE LOOP IN ejs
->MAKE HEADER FILE
->SHOW COMMON HEADER FILE
*/

// const express = require('express');
// const path = require('path');

// const app = express();

// const publicPath = path.join(__dirname, 'public');

// app.set('view engine', 'ejs');

// app.get('', (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get('/profile', (req, resp) => {
//     const user = {
//         name : 'kundan kumar',
//         email : 'kundan@gmail.com',
//         country : 'india',
//         skills : ['php', 'js', 'c++', 'node']
//     }
//     resp.render('profile',{user} );
// })

// app.get('/login', (req, resp) => {
//     resp.render('login')
// })

// app.listen(4300);

//................**************************..............................

//................**************************..............................
//MIDDLEWARE : USED ONLY WITH ROUTES for authentication or restriction
/*
->WHAT ARE MIDDLEWARES
->HOW TO MAKE A MIDDLEWARES
->APPLY MIDDLEWARE ON ROUTES
->TYPES OF MIDDLEWARE : application level, router level, error-handling middleware, built-in middleware, third-party middleware
*/

// const express = require('express');
// const app = express();

// //middleware
// const reqFilter = (req, resp, next) => {
//     // console.log('reqFilter');
//     if(!req.query.age){
//         resp.send('Please provide age')
//     }
//     else if(req.query.age<18){
//         resp.send('You cannot access this page')
//     }
//     else{
//         next();
//     }
// }

// app.use(reqFilter)

// app.get('/', (req, resp) => {
//     resp.send('Welcome to home page')
// })

// app.get('/users', (req, resp) => {
//     resp.send('Welcome to users page')
// })

// app.listen(4300);

//................**************************..............................

//................**************************..............................
//Route level Middleware : aise middleware which works on single , a group or all the routes.

// const express = require('express');
// const app = express();

// //middleware
// const reqFilter = (req, resp, next) => {
//     // console.log('reqFilter');
//     if(!req.query.age){
//         resp.send('Please provide age')
//     }
//     else if(req.query.age<18){
//         resp.send('You cannot access this page')
//     }
//     else{
//         next();
//     }
// }

// // app.use(reqFilter) // isko kisi particular route par lagane ke liye yha se hatakar us route ke andar lagaye

// app.get('/', (req, resp) => {
//     resp.send('Welcome to home page')
// })

// app.get('/users', reqFilter, (req, resp) => {
//     resp.send('Welcome to users page')
// })

// app.get('/about', reqFilter, (req, resp) => {
//     resp.send('Welcome to about page')
// })

// app.listen(4300);

//MAKING MIDDLEWARE IN DIFFERENT FILE

// const express = require('express');
// const reqFilter = require('./middleware');
// const app = express();

// // app.use(reqFilter) // isko kisi particular route par lagane ke liye yha se hatakar us route ke andar lagaye

// app.get('/', (req, resp) => {
//     resp.send('Welcome to home page')
// })

// app.get('/users', reqFilter, (req, resp) => {
//     resp.send('Welcome to users page')
// })

// app.get('/about', reqFilter, (req, resp) => {
//     resp.send('Welcome to about page')
// })

// app.listen(4300);

//Applying middleware on group of routes

// const express = require('express');
// const reqFilter = require('./middleware');
// const app = express();

// // route ka instance lekar app.get ke jagah route.get kar den
// const route = express.Router();

// route.use(reqFilter);

// app.get('/', (req, resp) => {
//     resp.send('Welcome to home page')
// })

// app.get('/users', (req, resp) => {
//     resp.send('Welcome to users page')
// })

// route.get('/about',  (req, resp) => {
//     resp.send('Welcome to about page')
// })

// route.get('/contact', (req, resp) => {
//     resp.send('Welcome to contact page')
// })

// app.use('/', route);

// app.listen(4300);

// Note : APP LEVEL MIDDLEWARE GLOBALLY APPLY HOTA HAI JABKI ROUTE LEVEL MIDDLEWARE EK ROUTE , A GROUP OF ROUTE YA ALL ROUTES PAR APPLY KAR SKTE HAI

//................**************************..............................

//................**************************..............................
//MONGO DB BASICS
/*
-> what is mongodb
-> mongodb vs sql
-> basic commands
 */

/* what is mongo db?
 . its is a NoSQL database
 . the data stored in a collection
 . collection don't have row nad columns
 . data is stored in form of OBJECTS

 */

//................**************************..............................

//................**************************..............................
//CRUD OPERATIONS IN MONGODB
/**
 CREATE, READ, UPDATE, DELETE
 */
//................**************************..............................

//................**************************..............................
//CONNECT NODE WITH MONGODB
/* download mongodb npm package */

// const {MongoClient} = require('mongodb');
// // upar wala can also be written as : const MongoClient = require('mongodb).MongoClient;

// const url = 'mongodb://0.0.0.0:27017'; // path of local mongodb

// const database = 'e-comm';

// const client = new MongoClient(url);   // to get data fromm given url from database

// async function getdata(){
//     let result = await client.connect();  // awiat lagaye hai kyoki connect promise return karta hai i.e. time delay wala thing so we use await to handle this . but we cant use await directly we have to make funcction as async.
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// async function getdata1(){
//     let result = await client.connect();  // awiat lagaye hai kyoki connect promise return karta hai i.e. time delay wala thing so we use await to handle this . but we cant use await directly we have to make funcction as async.
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({brand:"Oppo"}).toArray();
//     console.log(response);
// }

// getdata();
// getdata1();

//................**************************..............................

//................**************************..............................
//READ DATA FROM MONGODB
/*
->read data from MongoDbB
->make file for db connection
->handle promise
 */

// const {MongoClient} = require('mongodb');

// const url = 'mongodb://0.0.0.0:27017';

// const databaseName = 'e-comm';

// const client = new MongoClient(url);

// async  function dbConnect(){
//     let result = await client.connect();
//     db = result.db(databaseName);
//     return db.collection('products');
// }

// // dbConnect().then((resp)=>{
// //     resp.find({}).toArray().then((data)=>{
// //         console.log(data);
// //     })
// // });

// const main = async () =>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main()

// file banakar connect karna

// const dbConnect = require('./mongodb');

// dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data);
//     })
// });

//dbconnect.then karke use karen ya niche wala main function banakar karen both same output dega

// const main = async () =>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data)
// }

// main()

//................**************************..............................

//................**************************..............................
// INSERT DATA FROM MONGODB
/*
->make new file for insert data
->import mongodb conection
->insert single and multiple records
 */

//................**************************..............................

//................**************************..............................
//UPDATE DATA IN MONGO DB
/*
->make new file for updata data
->import mongodb connection
->update single and multiple records
 */

//................**************************..............................

//................**************************..............................
// MAKE NEW FILE FOR API
/*
-> make new file for API
-> import and use mongo config
-> make api for get data
-> test with postman
*/

//................**************************..............................

//................**************************..............................
//NODE JS POST API METHOD : jab hmko data database me new data ko save krna hota hai api ke through then we use POsT method
/** VVVI
  database me write through api -> POST
  database se read through api -> GET
  update the data  -> PUT
  delete the data  -> DELETE

 */
/*
-> make post method for API
-> send data from postman
-> get data in node js by request
-> write code for insert data in mongoDB
*/

//................**************************..............................

//................**************************..............................
//NODE JS PUT API METHOD : used for updating data
/*
-> make PUT method for API
-> send data from postman
-> handle data in node js by request
-> write code for updta dta in mongodb
*/

//................**************************..............................

//................**************************..............................
//Node js DELETE API METHOD
/*
->make delete method for api
->send data from postman
->handle data in node js by request
->write code for delete data in mongo db
*/

//................**************************..............................

// MONGOOSE

//................**************************..............................
//STRAT WITH MONGOOSE  : node js ko mongo db se connect karne ka npm package hai mongoose
/*
 -> what is mongoose  : overcome some of the limitaion of mongodb package
 -> diff between mongoose vs mongodb package:
   --- scema banakar extra field banane se rok skte hai
   --- uses scema and model
   --- can now define the type of field which will take input as particular datatype only
 -> install mongoose
 -> what is schemas
 -> what is model
 -> connect node js and mongodb with mongoose
 */

// const mongoose = require('mongoose');

// const main = async () =>{
//   await mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

//   // scema validation

//   const ProductSchema = new mongoose.Schema({
//     name:String,
//     price:Number
//   });

//   //model : uses Schema defined to connect mongodb and node js

//   const ProductsModel = mongoose.model('products', ProductSchema);

//   let data = new ProductsModel({name : "m7", price : 123});

//   let result = await data.save();

//   console.log(result);

// }

// main();

//................**************************..............................

//................**************************..............................
// CRUD WITH MONGOOSE
/*
 -> update record
 -> delete record
 -> find and read result
 */

/*

 const mongoose = require('mongoose');

 mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

 const ProductSchema = new mongoose.Schema({
  name:String,
  price:Number,
  brand:String,
  category:String
});

const saveInDB = async () =>{
  
  const Product = mongoose.model('products', ProductSchema);

  let data = new Product({
    name : "note pro",
    price : 250, 
    brand:"maxx", 
    category:"mobile"
  });

  let result = await data.save();

  console.log(result);

}

// saveInDB();


const  updateInDB = async() => {
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.updateOne(
    {name:"max 1"},
    {$set: {price: 1200}}
  )
  console.log(data);
}
// updateInDB()


const deleteInDB = async() => {
  const Product = mongoose.model('products', ProductSchema);
  let data = await Product.deleteOne(
    {name:"max 1"}
  );
  console.log(data);
}

// deleteInDB();


const findInDB = async() => {
  const Product = mongoose.model('products', ProductSchema);
  // let data = await Product.find();
  let data = await Product.find({name : "max 1"});
  console.log(data);
}

findInDB();


*/

//................**************************..............................

//................**************************..............................
//POST API WITH MONGOOSE
/*
 -> make config file for mongoDB
 -> make post route
 -> get data from postman and save in db
 */

//  const port = 5000
//  const express = require('express');

//  require('./config');

//  const Product = require('./product');

//  const app = express();
//  app.use(express.json()); // used to convert stream of data into json forrmat

//  app.post('/create', (req, resp) => {
//   console.log(req.body);
//   resp.send('Done');
//  });

//  app.listen(port,()=>{
//   console.log(`App is running on port ${port}`)
//  });

// storing data in database

// const port = 5000
// const express = require('express');

// require('./config');

// const Product = require('./product');

// const app = express();
// app.use(express.json()); // used to convert stream of data into json forrmat

// app.post('/create', async (req, resp) => {
//   let data = new Product(req.body);
//   let result = await data.save();
//  console.log(result);
//  resp.send(result);
// });

// app.listen(port,()=>{
//  console.log(`App is running on port ${port}`)
// });

//................**************************..............................

//................**************************..............................
// GET , DELETE AND PUT API
/*
-> example of GET method API
-> example of DELETE method API
-> example of PUT method API
 */

// const express = require('express');

// require('./config');

// const Product = require('./product');

// const app = express();

// app.use(express.json());

// app.post('/create', async (req, resp) => {
//    let data = new Product(req.body);
//    const result = await data.save();
//    resp.send(result);
// });

// app.get('/list', async (req, resp)=>{
//   let data = await Product.find();
//   resp.send(data);
// });

// deletion by query parameter
// app.delete('/delete/:_id', async (req, resp)=>{
//   // console.log(req.params);
//   let data  = await Product.deleteOne(req.params);
//   // resp.send("done");
//   resp.send(data);
// });

// app.put('/update/:_id', async (req, resp) =>{
//   console.log(req.params);

//    let data = await Product.updateOne(
//     req.params,
//     {
//       $set : req.body
//     }
//    )
//    resp.send(data);
// });

// app.listen(5000);

//................**************************..............................

//................**************************..............................
//SEARCH API IN NODE JS WITH MONGODB
/*
-> make simple GET Route for API
-> search with single field
-> search with multiple field
-> test api
*/

// const express = require('express');
// require('./config');
// const Product = require('./product');
// const app = express();

// app.use(express.json());

// app.get('/search/:key', async (req, resp)=>{
//   console.log(req.params.key);
//   let data = await Product.find(
//     {
//       // "$or":[
//       //   {"name":{$regex:req.params.key}}
//       // ]

//         //seraching in more than one field

//         "$or":[
//           {"name":{$regex:req.params.key}},
//           {"brand":{$regex:req.params.key}},  // ab ye dono field me search karega
//           {"category":{$regex:req.params.key}},
//         ]

//     }
//   );
//   resp.send(data);
// });

// app.listen(5000);

//................**************************..............................

//................**************************..............................
// UPLOAD FILE IN NODEJS : FILE UPLOAD DONE BY multer package
/**
 -> install multer npm package
 -> make router for upload file
 -> write code  for upload file
 */

//  const express = require('express');

//  const multer = require('multer');

//  const app = express();

// const upload = multer({
//   storage : multer.diskStorage({
//     destination : function(req, file, cb){
//       cb(null, 'uploads')
//     },
//     filename : function(req, file, cb){
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg")
//     }
//   })
// }).single('user_file');

//  app.post('/upload', upload, (req, resp)=>{
//   resp.send("file upload");
//  });

//  app.listen(5000);

//................**************************..............................

//................**************************..............................
// OS MODULE IN NODE JS : (Operating System Module) waise jagah use hota hai jahan operationg sysytem ka information nikalna hota hai
/*
-> what is os module
-> important functions of OS module
 */

// const os  = require('os');
// console.log(os.arch());
// console.log(os.freemem()) // shows in bytes
// console.log(os.freemem()/(1024*1024*1024)) // shows in GB

// console.log(os.hostname());

// console.log(os.platform());

// console.log(os.userInfo());

//................**************************..............................

//................**************************..............................
//EVENTS AND EVENT EMITTER IN NODE JS
/*
-> what is events and event emitter
-> make an event and call it
*/

// const express = require('express');

// const EventEmitter = require('events');

// const app=express();

// const event = new EventEmitter();

// let count = 0;

// event.on("countAPI", ()=>{
//   count++;
//   console.log("event called", count);
// })

// app.get('/', (req, resp)=>{
//   resp.send("api called");
//   event.emit("countAPI");
// })

// app.get('/search', (req, resp)=>{
//   resp.send("search api called")
//   event.emit("countAPI");
// })

// app.get('/update', (req, resp)=>{
//   resp.send("update api called")
//   event.emit("countAPI");
// })

// app.listen(5000);

//................**************************..............................

//................**************************..............................
//REPL : READ-EVAL-PRINT-LOOP
/*
-> what is REPL : command line tool of node js jisse ki command line par hi node js ya javasscript ka code run kar skte hain
-> example of REPL
 */

/*
  -> write node to enter into node mode i.e now we can run node js or js command.
  -> write .editor to enter into editor mode
  -> .help command to show all the useful command

*/

//................**************************..............................

//CONNECTION OF NODE JS WITH MYSQL

//................**************************..............................
// NODE JS CONNECT WITH MYSQL
/*
-> install MYSQL npm package
-> connect node js and mysql
-> get data from mysql
*/

// const mysql = require("mysql");

// const con = mysql.createConnection({
//   host: "localhost", // Replace with your MySQL server host
//   user: "root", // Replace with your MySQL username
//   password: "kundan", // Replace with your MySQL password
//   database: "test", // Replace with your MySQL database name
// });

// con.connect((err) => {
//   if (err) {
//     console.log("error",err);
//   } else {
//     console.log("connected");
//   }
// });

// con.query("select * from users", (err, result)=>{
//   console.log("result", result);
// });
//................**************************..............................

//................**************************..............................
// NODE JS GET API WITH MYSQL
/*
-> make a config file
-> make route for API
-> get data from MYSQL
*/

// const express = require("express");

// const con = require('./config_mysql');

// const app = express();
// app.use(express.json());

// app.get("/", (req, resp) => {
//   con.query("select * from users", (err, result) => {
//     if(err){
//       resp.send("error");
//     }
//     else{
//       resp.send(result);
//     }
//   })
// });


// app.post('/', (req, resp)=>{

  // static data sent

  // const data = {
  //   id:"108",
  //   name:"ashutosh",
  //   password:"lmn"
  // };
  // con.query('Insert INTO users SET ?', data, (error, result, fields)=>{
  //   if(error) error;
  //   resp.send(result);
  // })

  //data from postman

//   const data = req.body;

//   con.query('Insert INTO users SET ?', data, (error, result, fields)=>{
//     if(error) error;
//     resp.send(result);
//   })

// });


// app.put('/', (req, resp)=>{
//   // resp.send("update api working")

//   // static update

//   // const data = ['sagar123', "123", 118]
//   // con.query('UPDATE users SET name = ?, password=? where id =?', data, (error, result, fields)=>{
//   //   if(error) error;
//   //   resp.send(result);
//   // });
// });


// update from dynamic data from postman

// app.put('/:id', (req, resp)=>{
//   const data = [req.body.name, req.body.password, req.params.id]
//   con.query('UPDATE users SET name = ?, password=? where id =?', data, (error, result, fields)=>{
//     if(error) error;
//     resp.send(result);
//   });
// })


// app.delete('/:id', (req, resp)=>{
//   con.query("DELETE FROM users where id = "+req.params.id, (error, result, fields)=>{
//     if(error) error;
//     resp.send(result);
//   });
// })

// app.listen(5005)
//................**************************..............................
//................**************************..............................
//................**************************..............................
