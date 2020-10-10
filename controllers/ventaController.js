const productosModel = require("../models/productosModel");
const categoryModel = require("../models/categoriesModel")
const ventaModel = require("../models/ventaModel")
module.exports = {


getAll: async (req, res, next) => {
    try {
        const venta = await ventaModel.find({}).populate("products");
        /*productosModel.find({}, function (err, productos) {
            res.json(productos)
        })*/
        //const productos = await productosModel.find({user:req.body.user,password:req.body.password})
        res.json(venta)
    } catch (e) {
        next(e)
    }

},
getById: async (req, res, next) => {
    console.log(req.params.id);
    try {
        const venta = await ventaModel.findById(req.params.id)
        res.json(venta)
    } catch (e) {
        next(e)
    }
},
create: async function (req, res, next) {
    
    try {
        const venta = new ventaModel({
            products: req.body.products,
            cant_comp: req.body.cant_comp,
            
        })
        const vent = await venta.save();
        res.json(vent)
    } catch (e) {
        next(e)
    }
}};