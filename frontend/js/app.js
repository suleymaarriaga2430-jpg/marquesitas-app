// ==========================
// 📦 DATOS
// ==========================

// PRECIOS DE INGREDIENTES
const precios = {
  "Nutella": 20,
  "Queso": 15,
  "Lechera": 10,
  "Fresa": 12
};

// TOTAL DEL DÍA
let totalDia = 0;

// REGISTRO DE CLIENTES
let clientes = [];


// ==========================
// 👀 PREVIEW EN TIEMPO REAL
// ==========================

function actualizarPreview(){
  const checks = document.querySelectorAll("input[type=checkbox]:checked");
  const preview = document.getElementById("previewPedido");

  if(!preview) return;

  let lista = [];

  checks.forEach(c => lista.push(c.value));

  preview.textContent = lista.length ? lista.join(", ") : "Nada aún";
}

// ACTIVAR EVENTOS AUTOMÁTICOS
document.addEventListener("DOMContentLoaded", () => {
  const checks = document.querySelectorAll("input[type=checkbox]");

  checks.forEach(c => {
    c.addEventListener("change", actualizarPreview);
  });
});


// ==========================
// 🧁 FUNCIÓN PEDIDOS
// ==========================

function confirmar(){

  const checks = document.querySelectorAll("input[type=checkbox]:checked");
  const direccionInput = document.getElementById("direccion");
  const telefonoInput = document.getElementById("telefono");
  const totalDiaElemento = document.getElementById("totalDia");
  const lista = document.getElementById("lista");

  if(!direccionInput || !telefonoInput || !totalDiaElemento || !lista){
    console.error("Elementos del DOM no encontrados");
    return;
  }

  const direccion = direccionInput.value.trim();
  const telefono = telefonoInput.value.trim();

  // ==========================
  // VALIDACIONES
  // ==========================

  if(checks.length === 0){
    alert("Selecciona al menos un ingrediente");
    return;
  }

  if(direccion === ""){
    alert("Ingresa la dirección");
    return;
  }

  if(telefono === ""){
    alert("Ingresa tu número de teléfono");
    return;
  }

  // ==========================
  // PROCESAR PEDIDO
  // ==========================

  let totalPedido = 0;
  let ingredientes = [];

  checks.forEach(c => {
    ingredientes.push(c.value);
    totalPedido += precios[c.value] || 0;
  });

  totalDia += totalPedido;
  totalDiaElemento.innerText = totalDia;

  // ==========================
  // CREAR OBJETO CLIENTE
  // ==========================

  let cliente = {
    direccion,
    telefono,
    pedido: ingredientes,
    total: totalPedido,
    estado: "🧑‍🍳 Preparando"
  };

  clientes.push(cliente);

  console.log("Clientes:", clientes);

  // ==========================
  // MOSTRAR EN PANEL DERECHO
  // ==========================

  let item = document.createElement("li");

  item.innerHTML = `
    <div>
      <b>🧁 ${ingredientes.join(", ")}</b>
      <p>📍 ${direccion}</p>
      <p>📞 ${telefono}</p>
      <p>💲 $${totalPedido}</p>
      <p class="estado">🧑‍🍳 Preparando</p>
    </div>
  `;

  lista.appendChild(item);

  // ==========================
  // SIMULACIÓN ESTADO (tipo Uber)
  // ==========================

  setTimeout(() => {
    item.querySelector(".estado").textContent = "🚗 En camino";
  }, 3000);

  setTimeout(() => {
    item.querySelector(".estado").textContent = "✅ Entregado";
  }, 6000);

  // ==========================
  // LIMPIAR CAMPOS
  // ==========================

  checks.forEach(c => c.checked = false);
  direccionInput.value = "";
  telefonoInput.value = "";

  actualizarPreview();
}


// ==========================
// 🤖 CHATBOT
// ==========================

function enviar(){

  const mensajeInput = document.getElementById("mensaje");
  const chat = document.getElementById("chatbox");

  if(!mensajeInput || !chat){
    console.error("Elementos del chat no encontrados");
    return;
  }

  let mensaje = mensajeInput.value.trim().toLowerCase();

  if(mensaje === "") return;

  chat.innerHTML += `<p><b>Tú:</b> ${mensaje}</p>`;

  let respuesta = "";

  if(mensaje.includes("hola")){
    respuesta = "Hola 💕 ¿Qué deseas ordenar?";
  } 
  else if(mensaje.includes("menu")){
    respuesta = "Tenemos Nutella, Queso, Fresa y Lechera 😋";
  } 
  else if(mensaje.includes("precio")){
    respuesta = "Los precios van de $10 a $20 💖";
  } 
  else if(mensaje.includes("pedido")){
    respuesta = "Selecciona tus ingredientes y haz tu pedido 🧁";
  } 
  else {
    respuesta = "Gracias por tu mensaje 💕";
  }

  chat.innerHTML += `<p><b>Bot:</b> ${respuesta}</p>`;

  mensajeInput.value = "";

  chat.scrollTop = chat.scrollHeight;

}
  function logout(){
  localStorage.clear();
  window.location.href = "login.html";
  }