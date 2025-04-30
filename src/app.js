import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  console.log("Hola clase de arreglos");

  const animals = ["perro", "gato", "loro", "tortuga", "pez"];
  const places = ["casa", "oficina", "parque", "playa", "montaña"];
  const qualities = ["lindo", "feo", "grande", "pequeño", "rápido"];
  const extensions = [".com", ".es", ".org", ".net", ".io"];

  for (const animal of animals) {
    for (const place of places) {
      for (const quality of qualities) {
        for (const extension of extensions) {
          console.log(`${animal}${place}${quality}${extension}`);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};