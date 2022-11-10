// Ejercicio 1

let titulo = document.querySelectorAll(".tarjeta_h5");

titulo.forEach((data)=> {
    data.style.color = "blue"; 
});

// Ejercicio 2

let boton = document.querySelector(".my-btn");
console.log(boton);
boton.onclick = function() {
    console.log("hola");
    alert("hola");
  }






  //Ejercicio 3
let contador;
function calificar(item){
    console.log(item);
    contador = item.id[0];//captura el primer caracter del id
    let nombre = item.id.substring(1); //captura todo menos el primer caracter
    for(let i=0; i<5; i++){
        if(i<contador){
            document.getElementById((i+1)+nombre).style.color = "orange"; //0+1= 1+estrella= 1estrella.style.color = "orange"
        }else{
            document.getElementById((i+1)+nombre).style.color = "black";
        }
    }
}
function Mensaje(){
    alert("calificacion enviada");
} 

/* let contador2;
function calificar2(value){
    console.log(value);
    contador2 = value.id[0];//captura el primer caracter del id
    let nombre2 = value.id.substring(1); //captura todo menos el primer caracter
    console.log(nombre2);
    for(let j=0; j<5; j++){
        if(j<contador2){
            document.getElementById((j+1)+nombre2).style.color = "orange"; //0+1= 1+estrella= 1estrella.style.color = "orange"
        }else{
            document.getElementById((j+1)+nombre2).style.color = "black";
        }
    }
}
function Mensaje2(){
    alert("calificacion enviada");
}  */
//prueba
// let clic = document.getElementById("estrellaPrueba");
// clic.onclick = function(){
//     clic.style.color = "orange";
// }
// let clic2 = document.getElementById("estrellaPrueba2");
// clic2.onclick = function(){
//     clic2.style.color = "orange";
// }
// let clic3 = document.getElementById("estrellaPrueba3");
// clic3.onclick = function(){
//     clic3.style.color = "orange";
// }
// let clic4 = document.getElementById("estrellaPrueba4");
// clic4.onclick = function(){
//     clic4.style.color = "orange";
// }
// let clic5 = document.getElementById("estrellaPrueba5");
// clic5.onclick = function(){
//     clic5.style.color = "orange";
// }

// Ejercicio 4: Crea una lista de opciones en el que el título venga del HTML y los elementos de la lista se realicen a través de la manipulación del DOM.

let container__ListaDefensa = document.querySelector(".container__ListaDefensa");
let Compra = ["Courtois", "Lunin","Carvajal","E. Militão", "Antonio Rüdiger"]
let ul = document.createElement("ul");
container__ListaDefensa.appendChild(ul);

Compra.forEach(element => {
    let li = document.createElement("li");
    ul.appendChild(li);
    let p = document.createElement("p");
    li.appendChild(p);
    p.innerHTML = element;
})

// Ejercicio 5: Crea cuatro cards que representen un producto del mercado en el que se muestre:el nombre del producto, precio, nombre de la tienda, saber más. A través del DOM manipulation.

let productos = [
    {
        id: 1,
        img: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202101/11/00103990201521____1__1200x1200.jpg",
        nombre: "Gorra",
        precio: 50+"$" ,
        tienda: "Santiago de Bernabeu.",
        info: "saber mas"

    },

    {
        id: 2,
        img: "https://cdn.shopify.com/s/files/1/0448/3609/4115/products/FM4736REALHJSYAU-01_500x480.jpg?v=1620265046",
        nombre: "Camiseta",
        precio: 140+"$",
        tienda: "Santiago de Bernabeu.",
        info: "saber mas"
    },
    {
    
        id: 3,
        img: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202206/15/00132435218329____4__640x640.jpg",
        nombre: "Segunda equipacion",
        precio: 140+"$",
        tienda: "Santiago de Bernabeu.",
        info: "saber mas"
    },
    {
    
        id: 4,
        img: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202205/18/00132435218774____6__640x640.jpg",
        nombre: "Chandall",
        precio: 120+"$",
        tienda: "Santiago de Bernabeu.",
        info: "saber mas"
    }
];

let tituloProductos = document.querySelector(".tituloProductos");
let h2 = document.createElement("h2");
tituloProductos.appendChild(h2);
h2.innerHTML = "Productos de la tienda";
h2.style.textAlign = "center";
let container_productos1 = document.createElement("div");
container_productos1.classList.add("d-flex","flex-column","flex-sm-row","justify-content-center","align-items-center");
tituloProductos.appendChild(container_productos1);

let container_productos = document.createElement("div");
container_productos1.appendChild(container_productos);
productos.forEach(data => {
    
    let div_cols = document.createElement("div");
    container_productos.appendChild(div_cols);
    container_productos.classList.add("contenedor__productos","d-flex","flex-column","align-items-center","flex-sm-row");
    div_cols.innerHTML = `
    <div class="card my__card2 m-2" style="width: 18rem;">
        <img id="${data.id}" src="${data.img}" class="img_producto" class="card-img-top  img-fluid" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.nombre}</h5>
            <p class="card-text">Precio: ${data.precio}</p>
            <p class="card-text">Tienda: ${data.tienda}</p>
            <a href="#" class="btn btn-primary">${data.info}</a>
        </div>
    </div>
    `
});


//Ejercicio 6: Crea un input en el que todo lo que escribas, se refleje en otra parte mediante el uso del evento input de javascript.