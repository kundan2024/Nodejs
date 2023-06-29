const dbConnect = require('./mongodb')

const deleteData =async () =>{
    let data  = await dbConnect();
    // let result =  await data.deleteOne({name : 'max pro 5'})
    // console.log(result);
    // if(result.acknowledged==true){
    //     console.log('record deleted');
    // }

    // deleting more than one record

    let result =  await data.deleteMany({brand : 'micromax'})
    console.log(result);
    if(result.acknowledged==true){
        console.log('record deleted');
    }
}

deleteData();