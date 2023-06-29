const dbConnect = require('./mongodb');

// const insert = async () =>{
//     // console.log("insert function");
//     const db = await dbConnect();
//     const result = await db.insertOne(
//         {name : 'note 5', brand : 'vivo', price : '320', category:'mobile'}
//     );
//     console.log(result);
//     if(result.acknowledged==true){
//         console.log('data inserted successfully')
//     }
// }
// insert();

// to insert multiple objects : collect in an array

const insertm = async () =>{
    // console.log("insert function");
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            {name : 'maxi 1', brand : 'micromax1', price : '320', category:'mobile'},
            {name : 'max 2', brand : 'micromax', price : '420', category:'mobile'},
            {name : 'max 3', brand : 'micromax', price : '520', category:'mobile'}
        ]
    );
    console.log(result);
    if(result.acknowledged==true){
        console.log('data inserted successfully')
    }
}
insertm();