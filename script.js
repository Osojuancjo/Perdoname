const siBtn = document.getElementById("siBtn");
const noBtn = document.getElementById("noBtn");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const audio = document.getElementById("audioPlayer");
const effects = document.getElementById("effects");

let scale = 1;
let dioNo = false;
let musicaIniciada = false;
let lluviaActiva = false;
let contadorNo = 0;
let mensajeCorreo = "";

// lógica del mensaje según clics
if (contadorNo >= 8) {
  mensajeCorreo = "💀 Le costó MUCHÍSIMO decir que sí (" + contadorNo + " intentos)";
} else if (contadorNo >= 5) {
  mensajeCorreo = " Se hizo del rogar, como me gugutata (" + contadorNo + " intentos)";
} else if (contadorNo > 2) {
  mensajeCorreo = "👉🏼👈🏼 Le costó un poco (" + contadorNo + " intentos)";
} else {
  mensajeCorreo = "💜 Aceptó rápido (" + contadorNo + " intentos)";
}


// función fade-in
function reproducirConFade(src) {
  audio.src = src;
  audio.volume = 0;
  audio.play();

  let volumen = 0;
  const fade = setInterval(() => {
    if (volumen < 1) {
      volumen += 0.02;
      audio.volume = volumen;
    } else {
      clearInterval(fade);
    }
  }, 100);
}

// Botón NO
noBtn.addEventListener("click", () => {
  dioNo = true;
  contadorNo++; // contar clics

  if (!musicaIniciada) {
    reproducirConFade("audio/cd9.mp3");
    musicaIniciada = true;
  }

  scale += 0.2;
  siBtn.style.transform = `scale(${scale})`;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Botón SI
siBtn.addEventListener("click", () => {
  container1.classList.add("hidden");
  container2.classList.remove("hidden");

  if (!musicaIniciada) {
    reproducirConFade("audio/enjambre.mp3");
    musicaIniciada = true;
  }

  // mensajes dinámicos 
  if (contadorNo >= 5) {
    mensajeFinal.innerHTML = `
      👉🏼👈🏼 Te costo mucho pero aceptaste<br>
      💜 Pero sabía que caerías 💜<br>
      ✨ te amodoro ✨
    `;
  } else if (contadorNo > 2) {
    mensajeFinal.innerHTML = `
      Te costó un poco 😏<br>
      💜 Sabía que me perdonarías 💜<br>
      ✨ te amodoro ✨
    `;
  }
    if (contadorNo >= 8) {
  mensajeFinal.innerHTML = `
    💀 Pensé que no dirias que si....<br>
    💜 pero igual te quiero 💜<br>
    ✨ te amodoro ✨
  `;
}

emailjs.init("F1MlhDRUbkskDf6EU");

emailjs.send("service_5q7glsd", "template_sjpol4d", {
  message: mensajeCorreo,
  user: "Shey",
  hora: new Date().toLocaleString(),
  intentos: contadorNo
})
.then(() => console.log("Correo enviado"))
.catch(err => console.log("Error correo:", err));

  iniciarLluvia();
});

// lluvia infinita de corazones
function iniciarLluvia() {
  if (lluviaActiva) return;
  lluviaActiva = true;

  setInterval(() => crearCorazon(), 300);
  setInterval(() => crearBrillo(), 500);
}

// ❤️ corazones
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = Math.random() > 0.5 ? "💜" : "💖";

  heart.style.left = Math.random() * 100 + "vw";

  //  nacimiento de corazón desde abajo
  heart.style.top = "100vh";

  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  effects.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// brillos
function crearBrillo() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";

  effects.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2000);
}