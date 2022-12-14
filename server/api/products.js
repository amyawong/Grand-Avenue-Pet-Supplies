const router = require("express").Router();
// const {
//   models: { FavoriteItem, List, Product, User },
// } = require("../db");
const Product = require("../db/models/Product");

// view all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll(); // allProducts
    console.log(products);
    res.send(products);
  } catch (error) {
    next(error);
  }
});

// view single product
router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id); // singleProduct
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// // view product by category

// // add new product
// router.post("/", async (req, res, next) => {
//   try {
//     const product = await Product.create(req.body); // newProduct
//     res.send(product);
//   } catch (error) {
//     next(error);
//   }
// });

// // update product
// router.put("/:id", async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id); // productToUpdate
//     await product.update(req.body);
//     res.send(product);
//   } catch (error) {
//     next(error);
//   }
// });

// // delete product
// router.get("/", async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id); // productToDelete
//     await product.destroy();
//     res.send(product);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
