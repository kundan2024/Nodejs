
const express = require('express');

const dbConnect  = require('./mongodb');

const app = express();


app.use(express.json()) // to parse body

// app.get('/', (req, resp)=>{
//     resp.send({name : 'kundan'})
// });

// app.get('/', async (req, resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
//     resp.send(data);
// });


// app.post('/', (req, resp) => {
//     console.log(req.body)
//     // resp.send({name :"kundan"})
//     resp.send(req.body)
// })

// app.listen(4320);


// send data from postman

app.get('/', async (req, resp)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    resp.send(data);
});

app.post('/', async (req, resp) => {
    // console.log(req.body);
    let data = await dbConnect();

    let result = await data.insertMany(req.body)

    resp.send(req.body)
});


// app.put('/', async (req, resp) => {
//     // console.log(req.body);
//     let data  = await dbConnect();
//     let result = data.updateOne(
//         // {name:"iphone 13"}, 
//         // {$set:{price:900}}

//         // {name:"iphone 13"}, // sttic update
//         // {$set: req.body}

//         { name : req.body.name},
//         { $set : req.body}

//         )
//     resp.send({result:"update"});
// })


// agar name bhi update krna ho to hum parameter se pass krte hai

app.put('/:name', async (req, resp) => {
    let data  = await dbConnect();
    let result = data.updateOne(
        { name : req.params.name},
        { $set : req.body}
        )
    resp.send({result:"update"});
})

const mongodb = require('mongodb');

app.delete('/:id',async (req, resp) => {
    // console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id : new mongodb.ObjectId(req.params.id)});  //id ko object banakar likhna hoga tabhi delete hoga use like :  const mongodb = require('mongodb)
    resp.send(result);
})



app.listen(4320);

