const axios = require("axios");
const Coin = require("../models/coin");

exports.getCoins = async (req, res) => {
  const dataCoins = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
  );
  const data = dataCoins.data.map((coin) => {
    // const { name, current_price, image, symbol, last_updated } = coin;
    let currency = new Coin(coin);
      currency.save()
    return currency;
    
  });
  res.json(data);
};
