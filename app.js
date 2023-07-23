const express = require("express");
const app = express();
const connectDb = require("./db/_connect");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

require("dotenv").config();
//Conectar DB
connectDb();
//Middleware para entender las request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./routes/frutasRouter"));

app.listen(process.env.APP_PORT, () => {
  console.log(`Funcionando en ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
