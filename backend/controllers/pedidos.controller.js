let pedidos = [];

const crearPedido = (req, res) => {
  const pedido = req.body;

  pedidos.push(pedido);

  res.json({ mensaje: "Pedido guardado" });
};

const obtenerPedidos = (req, res) => {
  res.json(pedidos);
};

const obtenerTotal = (req, res) => {
  const total = pedidos.reduce((sum, p) => sum + p.total, 0);
  res.json({ total });
};

module.exports = {
  crearPedido,
  obtenerPedidos,
  obtenerTotal
};