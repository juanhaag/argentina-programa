const express = require("express");
const router = express.Router();
const frutasController = require("../controller/frutas_controller");

router.post("/crear-Fruta", frutasController.agregarFruta);
router.get("/traer-productos", frutasController.traerProductos);
router.get("/traer-producto/:codigo", frutasController.traerProductoPorCodigo);
router.get(
  "/traer-producto-nombre/:nombre",
  frutasController.traerProductoPorNombre
);
router.get(
  "/traer-producto-categoria/:categoria",
  frutasController.traerProductoPorCategoria
);
router.patch("/editar-fruta", frutasController.editarProductoPorNombre);
router.delete("/eliminar-producto", frutasController.eliminarProductoPorCodigo);
module.exports = router;
