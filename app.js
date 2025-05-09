
const express = require("express")
const app = express()

require("./database/connection")
app.use(express.json())

const itemRoute = require("./routes/items-route")
app.use("", itemRoute)

app.listen(4000, function () {
  console.log("Server at port 4000 started!!")
})