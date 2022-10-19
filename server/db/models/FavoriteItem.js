const Sequelize = require("sequelize");
const db = require("../db");

const FavoriteItem = db.define("favoriteItem", {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
    },
  },
  unitPrice: {
    type: Sequelize.TEXT,
    defaultValue: 0.99,
  },
});

FavoriteItem.beforeSave((favoriteItem) => {
  if (Number(favoriteItem.unitPrice)) {
    // favoriteItem.unitPrice = Number(favoriteItem.unitPrice);
    favoriteItem.unitPrice = `${Number(favoriteItem.unitPrice)}`;
  }
});

module.exports = FavoriteItem;
