import "bootstrap"; // Importa la librería de Bootstrap para utilizar sus estilos y componentes.
import "/style.css"; // Importa el archivo CSS global (style.css). Vite lo maneja automáticamente.

window.onload = function () {  // Función que se ejecutará cuando la página haya cargado completamente.
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    console.log("Excuse generated:", excuse);  // Para verificar en la consola si se genera la excusa correctamente
    document.getElementById("excuse").innerText = excuse;  // Actualiza el texto en el HTML con la excusa generada.
  }

  // Inicializar con una excusa al cargar la página
  generateExcuse();

  // Asociar el evento del botón para generar una nueva excusa
  document.getElementById("generateButton").onclick = function() {
    console.log("Button clicked! Generating a new excuse...");
    generateExcuse();
  };
};
