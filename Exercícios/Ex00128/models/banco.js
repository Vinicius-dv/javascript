const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema({
  item: {
    type:String,
    required:true
  },
  preço:{
    type:Number,
    required:true
  }
})

const Item_add = mongoose.model('Item_add',item)
module.exports = Item_add