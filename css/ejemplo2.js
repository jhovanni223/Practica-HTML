const boton = document.getElementById('botoncito');
const input  = document.getElementById('cuadrito');
const contenedor = document.getElementsByClassName('contenedor');
console.log(contenedor);
boton.setAttribute('value','Cambio texto');
input.setAttribute('value','Que dormidos que estan');


async function clickButton (){

    var usuario = [];
    var username ;
    console.log("ACA SE DETIENE");
    console.log("ACA SE DETIENE2");
    console.log("ACA SE DETIENE3");
    console.log("ACA SE DETIENE4");
    console.log("ACA SE DETIENE5");
    console.log("ACA SE DETIENE6");
    console.log("ACA SE DETIENE7");
    console.log("ACA SE DETIENE8");
    console.log("ACA SE DETIENE9 ");

     fetch('https://jsonplaceholder.typicode.com/users/4')
      .then(response => response.json()).then(res =>{
        //console.log(res.username)
         usuario = res;
         username = res.username;
        console.log(usuario);
      })      
      
    const body = document.body;
    const nombre = document.createElement('h1');
    const text = document.createTextNode(username);
    console.log("ACA SE CONTINUA 10");
    //console.log(usuario);
   
    nombre.appendChild(text);
     body.append(nombre);
   

}


