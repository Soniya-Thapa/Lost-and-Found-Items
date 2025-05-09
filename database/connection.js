
const {Sequelize, DataTypes} = require("sequelize")
const itemModel = require("./models/items-model")

const sequelize = new Sequelize("postgresql://postgres.mgjqbyqiftykexltbejc:lostandfounditems@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate().then(()=>{
  console.log("Authentication successfull!!!")
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.items = itemModel(sequelize,DataTypes)

sequelize.sync({force:false, alter: false })
.then(()=>{
  console.log("Migrate happened!!!")
})

module.exports = db
