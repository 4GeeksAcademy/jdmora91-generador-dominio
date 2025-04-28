console.log("Hola clase de arreglos");

let animales = ["perro", "gato", "loro", "tortuga", "pez"];
let lugar = ["casa", "oficina", "parque", "playa", "montaña"];
let cualidad = ["lindo", "feo", "grande", "pequeño", "rápido"];
let extecciones = [".com", ".es", ".org", ".net", ".io"];

for (let a of animales){
    for (let l of lugar){
        for (let c of cualidad){
            for (let ext of extecciones){
                console.log(a + l + c + ext);
            
            }
        }
    }
}