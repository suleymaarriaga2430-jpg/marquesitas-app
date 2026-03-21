const express = require("express");
const router = express.Router();

const {
  crearPedido,
  obtenerPedidos,
  obtenerTotal
} = require("../controllers/pedidos.controller");

router.post("/", crearPedido);
router.get("/", obtenerPedidos);
router.get("/total", obtenerTotal);

module.exports = router;