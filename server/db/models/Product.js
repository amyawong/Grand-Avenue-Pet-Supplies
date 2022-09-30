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
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT,
  },
  category: {
    type: Sequelize.ENUM('dog', 'cat', 'reptile', 'bird', 'rodent', 'other'),
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});

Product.beforeSave((product) => {
  product.price *= 100;
})

module.exports = Product;

// name, imageURL, price, description, category