const { model, Schema } = require("mongoose");

const CoinSchema = Schema({
  
  symbol: {
    type: String,
  },
  current_price: {
    type: Number,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  last_updated: {
    type: String,
  },
  currency:{
    type:String,
    emun: ['EURO','DOLAR','PESOS']
  },
},{
  versionKey:false
});

module.exports = model("Coin", CoinSchema);
