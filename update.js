const dbConnect = require('./mongodb')

const updateData = async () =>{
    let data = await dbConnect(); // promise return karta hai usko hatane ke liye await use kiye hai
    // let result = await data.updateOne(
    //     {name : 'max 3'}, {$set:{name:'max pro 5', price:453}} // kha change krna hai and kya change krna hai
    // )

    // updating all matched record 
    // note : updateOne sirf ek hi matched record ko update krta hai even though match is many
    let result = await data.updateMany(
        {name : 'note 5'}, {$set:{name:'max pro 5', price:453}} // kha change krna hai and kya change krna hai
    )

    console.log(result);
}
updateData();