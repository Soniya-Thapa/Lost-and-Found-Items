const { items } = require("../database/connection")

exports.fetchItems = async function (req, res) {
  try {
    const datas = await items.findAll()
    res.json({
      message: "Items fetched successfully !!!",
      datas
    })
  }
  catch (error) {
    res.json({
      message: "error" + error

    })
  }
}

exports.addItems = async function (req, res) {
  try {
    const { itemName, itemFoundPlace, itemType, itemFoundTime, itemFoundDate } = req.body
    await items.create({
      itemName,
      itemFoundPlace,
      itemType,
      itemFoundTime,
      itemFoundDate,
    })
    res.json({
      message: "items added successfully"
    })
  }
  catch (error) {
    res.json({
      message: "error" + error
    })
  }
}

exports.deleteItems = async function (req, res) {
  try {
    const id = req.params.id
    await items.destroy({
      where: {
        id
      }
    })
    res.json({
      message: "books deleted successfully"
    })
  }
  catch (error) {
    res.json({
      message: "error" + error

    })
  }
}

exports.editItems = async function (req, res) {
  try {
    const id = req.params.id
    const { itemName, itemFoundPlace, itemType, itemFoundTime, itemFoundDate } = req.body
    await items.update({
      itemName,
      itemFoundPlace,
      itemType,
      itemFoundTime,
      itemFoundDate
    }, {
      where: {
        id
      }
    })
    res.json({
      message: "Items updated successfully !!!"
    })
  }
  catch (error) {
    res.json({
      message: "error" + error
    })
  }
}

exports.singleItemFetch = async function (req, res) {
  try {
    const id = req.params.id
    const datas = await items.findByPk(id)
    res.json({
      message: "Single items fetched successfully !!!",
      datas
    })
  }
  catch (error) {
    res.json({
      message: "error" + error
    })
  }
}