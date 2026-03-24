// Inicializar EmailJS
(function() {
  emailjs.init("F1MlhDRUbkskDf6EU"); // Public key
})();

const siBtn = document.getElementById("siBtn");
const noBtn = document.getElementById("noBtn");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");

let scale = 1;

// Botón NO
noBtn.addEventListener("click", () => {
  scale += 0.2;
  siBtn.style.transform = `scale(${scale})`;

  // mover botón NO aleatoriamente
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Botón SÍ
siBtn.addEventListener("click", () => {
  container1.classList.add("hidden");
  container2.classList.remove("hidden");

  // Enviar correo
    //Service ID y Template ID
  emailjs.send("service_5q7glsd", "template_sjpol4d", {
  message: "Le dio clic en SI :3",
  user: "Shey",
  hora: new Date().toLocaleString()
  }).then(() => {
    console.log("Mensaje enviado");
  }).catch((error) => {
    console.log("Error:", error);
  });
});