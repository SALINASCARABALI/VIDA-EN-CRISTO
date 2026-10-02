const versiculos = [
  "Jehová es mi pastor; nada me faltará. (Salmo 23:1)",
  "Todo lo puedo en Cristo que me fortalece. (Filipenses 4:13)",
  "Confía en Jehová con todo tu corazón. (Proverbios 3:5)",
  "No temas, porque yo estoy contigo. (Isaías 41:10)"
];

const elegido = versiculos[Math.floor(Math.random() * versiculos.length)];
document.querySelector("#versiculo").textContent = elegido;

const hora = new Date().getHours();
let saludo;

if (hora < 12) saludo = "Buenos días";
else if (hora < 19) saludo = "Buenas tardes";
else saludo = "Buenas noches";

document.querySelector("#saludo").textContent = saludo + ", bienvenido(a) 🙏";