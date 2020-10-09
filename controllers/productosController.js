const productosModel = require("../models/productosModel");
const categoryModel = require("../models/categoriesModel")
module.exports = {
    getAll: async (req, res, next) => {
        try {
            const productos = await productosModel.find({"tags.name":"Celulares"}).populate("category")
            /*productosModel.find({}, function (err, productos) {
                res.json(productos)
            })*/
            //const productos = await productosModel.find({user:req.body.user,password:req.body.password})
            res.json(productos)
        } catch (e) {
            next(e)
        }

    },
    getById: async (req, res, next) => {
        console.log(req.params.id);
        try {
            const producto = await productosModel.findById(req.params.id)
            res.json(producto)
        } catch (e) {
            next(e)
        }
    },
    create: async function (req, res, next) {
        console.log(req.body);
        try {
            const producto = new productosModel({
                name: req.body.name,
                sku: req.body.sku,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                category:req.body.category,
                tags:req.body.tags
            })
            const prod = await producto.save();
            res.json(producto)
        } catch (e) {
            next(e)
        }
    },
    update: async function (req, res, next) {
        try {
            let producto = await productosModel.update({ _id: req.params.id }, req.body, { multi: false })
            res.json(producto)
        } catch (e) {
            next(e)
        }
    },
    delete: async function (req, res, next) {
        try{
            let producto = await productosModel.deleteOne({ _id: req.params.id })
            res.json(producto)
        } catch (e) {
            next(e)
        }
    }
}