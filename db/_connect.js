const mongoose = require("mongoose");

function connect() {
  const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.xhyrvta.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log("error db:", e));
}

module.exports = connect;
