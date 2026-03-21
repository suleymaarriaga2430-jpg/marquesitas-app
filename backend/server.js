const express = require("express");
const app = express();

app.use(express.json());

const pedidosRoutes = require("./routes/pedidos.routes");

app.use("/api/pedidos", pedidosRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});