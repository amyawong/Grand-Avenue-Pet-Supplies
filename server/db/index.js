const db = require("./db");

const FavoriteItem = require("./models/FavoriteItem");
const List = require("./models/List");
const Product = require("./models/Product");
const User = require("./models/User");

module.exports = {
  db,
  models: {
    FavoriteItem,
    List,
    Product,
    User,
  },
};

// User.hasMany(FavoriteItem);
// FavoriteItem.belongsTo(User);

// Category.hasMany(Product)
// Product.belongsTo(Category)

User.hasOne(List);
List.belongsTo(User);
List.belongsToMany(Product, { through: FavoriteItem });
Product.belongsToMany(List, { through: FavoriteItem });
