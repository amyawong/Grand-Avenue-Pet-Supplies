const router = require("express").Router();
const {
  models: { FavoriteItem, List, Product, User },
} = require("../db");

// find all customers
router.get("/", async (req, res, next) => {
  try {
    const customers = await User.findAll({
      // const users = await User.findAll({
      where: {
        isAdmin: false,
      },
    });
    res.send(customers);
    // res.send(users)
  } catch (error) {
    next(error);
  }
});

// // find all admins
// router.get('/', async (req, res, next) => {
//   try {
//     const admins = await User.findAll({
//       where: {
//         isAdmin: true
//       }
//     })
//     res.send(admins)
//   } catch (error) {
//     next(error)
//   }
// })

// // find all users
// router.get('/', async (req, res, next) => {
//   try {
//     const allAccounts = await User.findAll()
//     res.send(allAccounts)
//   } catch (error) {
//     next(error);
//   }
// })

// create new user
router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (error) {
    next(error);
  }
});

// update user info
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// view favorites

// view own profile

// update profile

module.exports = router;
