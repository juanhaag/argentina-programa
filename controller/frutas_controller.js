const Fruta = require("../models/Fruta");

const agregarFruta = async (req, res) => {
  try {
    const { nombre, precio, categoria } = req.body;
    const fruta = new Fruta({
      nombre,
      precio,
      categoria,
    });
    await fruta.save();
    res.status(200).json(fruta);
  } catch (error) {
    res.status(500).json({
      message: "Error al agregar la fruta",
      error: error.message,
    });
  }
};

const traerProductos = async (req, res) => {
  try {
    const productosDb = await Fruta.find({});
    productosDb != ""
      ? res.status(200).send(productosDb)
      : res.status(404).send({ message: "No se encontraron frutas" });
  } catch (error) {
    res.status(500).json({
      message: "Error al traer los productos",
      error: error.message,
    });
  }
};
const traerProductoPorCodigo = async (req, res) => {
  try {
    const codigo = req.params.codigo;
    const productoPorCodigo = await Fruta.find({ codigo });
    productoPorCodigo != ""
      ? res.status(200).send(productoPorCodigo)
      : res
          .status(404)
          .send({ message: "No se encontraron frutas con ese id" });
  } catch (error) {
    res.status(500).json({
      message: "Error al traer los productos",
      error: error.message,
    });
  }
};
const traerProductoPorNombre = async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const regex = new RegExp(`.*${nombre}.*`, "i");
    const productoPorNombre = await Fruta.find({ nombre: regex });
    productoPorNombre != ""
      ? res.status(200).send(productoPorNombre)
      : res
          .status(404)
          .send({ message: "No se encontraron frutas con ese nombre" });
  } catch (error) {
    res.status(500).json({
      message: "Error al traer los productos",
      error: error.message,
    });
  }
};
const traerProductoPorCategoria = async (req, res) => {
  try {
    const categoria = req.params.categoria;
    const productoPorNombre = await Fruta.find({ categoria });
    productoPorNombre != ""
      ? res.status(200).send(productoPorNombre)
      : res
          .status(404)
          .send({ message: "No se encontraron frutas en esa categoria" });
  } catch (error) {
    res.status(500).json({
      message: "Error al traer los productos",
      error: error.message,
    });
  }
};
const editarProductoPorNombre = async (req, res) => {
  try {
    const { nombreBuscar, precio } = req.body;

    const productoEditado = await Fruta.findOneAndUpdate(
      { nombre: nombreBuscar },
      { precio },
      { new: true }
    );

    if (productoEditado) {
      res.status(200).send(productoEditado);
    } else {
      res
        .status(404)
        .send({ message: "No se encontraron frutas con ese nombre" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error al traer los productos",
      error: error.message,
    });
  }
};
const eliminarProductoPorCodigo = async (req, res) => {
    try {
      const { codigo } = req.body;
  
      const productoEditado = await Fruta.findOneAndDelete({ codigo });
  
      if (productoEditado) {
        res.status(200).send(productoEditado);
      } else {
        res
          .status(404)
          .send({ message: "No se encontraron frutas con ese nombre" });
      }
    } catch (error) {
      res.status(500).json({
        message: "Error al traer los productos",
        error: error.message,
      });
    }
  };
  
module.exports = {
  agregarFruta,
  traerProductos,
  traerProductoPorCodigo,
  traerProductoPorNombre,
  traerProductoPorCategoria,
  editarProductoPorNombre,
  eliminarProductoPorCodigo
};
