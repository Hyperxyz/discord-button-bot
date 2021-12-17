const mongoose = require("mongoose");
const config = require('../config.json')

mongoose.connect(config.Bot.Mongourl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => console.log("[DATABASE] Connected To Database"));
mongoose.connection.on("error", () => console.error("[DATABASE] Failed To Connect Database"));

