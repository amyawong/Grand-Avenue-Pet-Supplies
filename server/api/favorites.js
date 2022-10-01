const router = require("express").Router();
const {
  models: { FavoriteItem, List, Product, User },
} = require("../db");

// view favorites
router.get("/", async (req, res, next) => {
  try {
    let list = await List.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "has product(s)",
      },
      include: [Product],
      // order: [[Product, 'id', 'DESC']]
    });
    res.send(list);
  } catch (error) {
    next(error);
  }
});

// create list of favorites (change status from 'empty' to 'has product(s)')
router.post("/", async (req, res, next) => {
  try {
    let list = await List.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "has product(s)",
      },
      include: [Product],
    });

    if (!list) {
      list = await List.create({
        status: "has product(s)",
        userId: req.user.dataValues.id,
      });
    }

    let product = await FavoriteItem.findOne({
      where: {
        listId: list.id,
        productId: req.body.productId,
      },
    });

    if (!product) {
      await FavoriteItem.create({
        listId: list.id,
        productId: req.body.productId,
      });
    } else {
      let newQuantity = parseInt(product.quantity) + 1;
      await product.update({
        quantity: newQuantity,
      });
    }

    res.send(
      await List.findOne({
        where: {
          id: list.id,
        },
        include: [Product],
        order: [[Product, "id", "DESC"]],
      })
    );
  } catch (error) {
    next(error);
  }
});

// update quanitity in list of favorites
// router.put('/', async (req, res, next) => {
//   try {

//   } catch (error) {
//     next(error)
//   }
// });

// delete item from favorites
// router.delete('/', async (req, res, next) => {
//   try {

//   } catch (error) {
//     next(error)
//   }
// });

module.exports = router;
