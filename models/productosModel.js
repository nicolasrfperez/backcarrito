const mongoose = require("../bin/mongodb");
const tagsSchema = new mongoose.Schema({
    name:String
})
const productosSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"El campo name es obligatorio"],
        minlength:1,
        maxlength:100
    },
    sku: {
        type:String,
        required:[true,"El campo sku es obligatorio"],
        unique:true
    },
    description: String,
    price: {
        type:Number,
        min:1,
        get:function(price){
            return price*1.21
        }
    },
    quantity: {
        type:Number,
        min:1
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    tags:[tagsSchema]
})
productosSchema.virtual("price_currency").get(function(){
    return "$ "+this.price
})
productosSchema.set("toJSON",{getters:true,virtuals:true})
module.exports = mongoose.model("products", productosSchema)