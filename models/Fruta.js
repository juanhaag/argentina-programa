const mongoose = require("mongoose");

const FrutaSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

// Middleware pre para autoincrementar el código
FrutaSchema.pre("save", async function (next) {
  try {
    const model = this.constructor;
    const lastProduct = await model.findOne({}, {}, { sort: { codigo: -1 } });
    if (lastProduct && lastProduct.codigo) {
      this.codigo = lastProduct.codigo + 1;
    } else {
      this.codigo = 1;
    }
    next();
  } catch (err) {
    next(err);
  }
});
const Fruta = mongoose.model("Fruta", FrutaSchema);
module.exports = Fruta;
