const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  price: {
    type: Sequelize.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // }
  },
  description: {
    type: Sequelize.TEXT,
  },
  weight: {
    type: Sequelize.TEXT,
  },
  brand: {
    type: Sequelize.TEXT,
  },
  animal: {
    type: Sequelize.ENUM('Dog', 'Cat', 'Reptile', 'Bird', 'Rodent', 'Live', 'Fish', 'Other'),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  category: {
    type: Sequelize.ENUM('Food/Treats', 'Supplies', 'Toys', 'Accessories', 'Other/Miscellaneous'),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});

Product.beforeSave((product) => {
  // product.price *= 100;
    if (Number(product.price)) {
    product.price = Number(product.price)
  }
})

module.exports = Product;

// name, imageURL, price, description, weight, brand, animal, category