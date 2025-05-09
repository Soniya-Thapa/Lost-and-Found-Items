
const itemModel = (sequelize, DataTypes) => {
  const items = sequelize.define("items", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemFoundPlace: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    itemFoundTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    itemFoundDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  })
  return items
}
module.exports = itemModel