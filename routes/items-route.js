const express = require("express");
const router = express.Router();

const { fetchItems, addItems, deleteItems, editItems, singleItemFetch } = require("../controllers/items-controller");

router.route("/items").get(fetchItems).post(addItems);
router.route("/items/:id").delete(deleteItems).patch(editItems).get(singleItemFetch)

module.exports = router
