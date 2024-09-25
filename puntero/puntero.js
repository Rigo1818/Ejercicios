const infoDiv = document.getElementById("info");

// Evento de movimiento del ratón
document.addEventListener("mousemove", (event) => {
  const x = event.clientX; 
  const y = event.clientY; 
  const pageX = event.pageX; 
  const pageY = event.pageY; 

  infoDiv.innerHTML = `Posición del ratón: <br>
                             Ventana - X: ${x}, Y: ${y} <br>
                             Página - X: ${pageX}, Y: ${pageY}`;
});

// Evento de pulsación de tecla
document.addEventListener("keydown", (event) => {
  const key = event.key; 
  const code = event.code; 
  infoDiv.innerHTML = `Tecla pulsada: <br>
                             Tecla - ${key} <br>
                             Código - ${code}`;
});
