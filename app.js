window.onload = function () {
  // Define las personas, animales o entidades que podrían estar involucradas en la excusa
  const who = [
    "The dog", 
    "My grandma", 
    "The mailman", 
    "My bird", 
    "My little brother", 
    "The neighbor"
  ];

  // Define las acciones que estas personas o animales podrían hacer
  const action = [
    "ate", 
    "spilled on", 
    "accidentally stepped on", 
    "knocked over", 
    "broke", 
    "lost"
  ];

  // Define qué objetos o cosas fueron afectadas
  const what = [
    "my homework", 
    "my phone", 
    "the car", 
    "my favorite book", 
    "my glasses", 
    "the computer"
  ];

  // Define cuándo ocurrió el incidente (con acciones que tienen sentido en ese momento)
  const when = [
    "before the class", 
    "while I was taking a nap", 
    "while I was exercising", 
    "during my lunch", 
    "while I was in a meeting", 
    "when I was distracted"
  ];

  function generateExcuse() {
    // Selecciona aleatoriamente los elementos de las excusas
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // Crea la excusa con los elementos seleccionados
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    
    // Imprime la excusa en la consola y en la página
    console.log("Excuse generated:", excuse);
    document.getElementById("excuse").innerText = excuse;
  }

  // Genera una excusa al cargar la página
  generateExcuse();

  // Genera una nueva excusa cuando se hace clic en el botón
  document.getElementById("generateButton").onclick = function () {
    console.log("Button clicked! Generating a new excuse...");
    generateExcuse();
  };
};
