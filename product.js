
// yha matlab is file me product colection  ka schema and model define kiye hai

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

module.exports =  mongoose.model('products', productSchema);



