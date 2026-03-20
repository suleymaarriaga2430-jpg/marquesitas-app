// PRECIOS DE INGREDIENTES
let precios = {
  "Nutella": 20,
  "Queso": 15,
  "Lechera": 10,
  "Fresa": 12
};

// TOTAL DEL DÍA
let totalDia = 0;

// REGISTRO DE CLIENTES
let clientes = [];

// FUNCIÓN PARA HACER PEDIDO
function confirmar(){

  let checks = document.querySelectorAll("input[type=checkbox]:checked");
  let direccion = document.getElementById("direccion").value;

  // VALIDACIONES
  if(direccion === ""){
    alert("Ingresa la dirección");
    return;
  }

  if(checks.length === 0){
    alert("Selecciona al menos un ingrediente");
    return;
  }

  let totalPedido = 0;
  let ingredientes = [];

  // CALCULAR TOTAL
  checks.forEach(c => {
    ingredientes.push(c.value);
    totalPedido += precios[c.value];
  });

  // SUMAR AL TOTAL DEL DÍA
  totalDia += totalPedido;
  document.getElementById("totalDia").innerText = totalDia;

  // PEDIR TELÉFONO
  let telefono = prompt("Ingresa tu número de teléfono");

  // GUARDAR CLIENTE
  let cliente = {
    direccion: direccion,
    telefono: telefono,
    pedido: ingredientes,
    total: totalPedido
  };

  clientes.push(cliente);

  console.log("Clientes registrados:", clientes);

  // MOSTRAR PEDIDO EN PANTALLA
  let lista = document.getElementById("lista");
  let item = document.createElement("li");

  item.innerHTML = `
    <b>Pedido:</b> ${ingredientes.join(", ")} <br>
    <b>Dirección:</b> ${direccion} <br>
    <b>Tel:</b> ${telefono} <br>
    <b>Total:</b> $${totalPedido}
  `;

  lista.appendChild(item);

  // LIMPIAR CAMPOS
  checks.forEach(c => c.checked = false);
  document.getElementById("direccion").value = "";
}

// ==========================
// 🤖 CHATBOT (IA SIMULADA)
// ==========================

function enviar(){
  let mensaje = document.getElementById("mensaje").value.toLowerCase();
  let chat = document.getElementById("chatbox");

  // MENSAJE DEL USUARIO
  chat.innerHTML += `<p><b>Tú:</b> ${mensaje}</p>`;

  let respuesta = "";

  // RESPUESTAS AUTOMÁTICAS
  if(mensaje.includes("hola")){
    respuesta = "Hola 💕 ¿Qué deseas ordenar?";
  } 
  else if(mensaje.includes("menu")){
    respuesta = "Tenemos Nutella, Queso, Fresa y Lechera 😋";
  } 
  else if(mensaje.includes("precio")){
    respuesta = "Los precios van de $10 a $20 dependiendo del ingrediente 💖";
  } 
  else if(mensaje.includes("pedido")){
    respuesta = "Puedes hacer tu pedido seleccionando los ingredientes a la izquierda 🧁";
  } 
  else {
    respuesta = "Gracias por tu mensaje 💕 en un momento te atendemos";
  }

  // RESPUESTA DEL BOT
  chat.innerHTML += `<p><b>Bot:</b> ${respuesta}</p>`;

  // LIMPIAR INPUT
  document.getElementById("mensaje").value = "";

  // SCROLL AUTOMÁTICO
  chat.scrollTop = chat.scrollHeight;
}