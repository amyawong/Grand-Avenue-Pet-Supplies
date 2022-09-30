const db = require('./db');

const Product = require('./models/Product');
const User = require('./models/User');

module.exports = {
  db,
  models: {
    Product,
    User
  }
}

// Category.hasMany(Product)
// Product.belongsTo(Category)