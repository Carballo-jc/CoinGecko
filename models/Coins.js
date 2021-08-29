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
});

CoinSchema.methods.toJSON = function () {
  const {
    market_cap,
    market_cap_rank,
    fully_diluted_valuation,
    fully_diluted_valuation,
    price_change_percentage_24h,
    market_cap_change_24h,
    market_cap_change_percentage_24h,
    circulating_supply,
    total_supply,
    max_supply,
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
    roi,
    ...coin
  } = this.toObject();
  return coin;
};
module.exports = model("Coin", CoinSchema);
