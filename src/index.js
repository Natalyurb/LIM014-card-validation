import {maskify} from './validator.js'; //console.log(validator);
import {luhnCheck} from './validator.js';
const idPage2 = document.getElementById("page2");
const idPage1 = document.getElementById("page1");
//boton registrar//
const btnRegistrar = document.getElementById("Registrar");
btnRegistrar.addEventListener("click", function(){

idPage2.classList.remove("ocultar");
idPage1.classList.add("ocultar");
});
//boton ingresar//
const btnIngresar = document.getElementById("Ingresar");
btnIngresar.addEventListener("click",function(){
const idPage3 = document.getElementById("page3");
const idPage1 = document.getElementById("page1");
idPage3.classList.remove("ocultar");
idPage1.classList.add("ocultar");
});
  //boton siguiente-Registrar datos//
const btnSiguiente = document.getElementById("Siguiente");
btnSiguiente.addEventListener("click",function(){
const idPage3 = document.getElementById("page3");
const idPage2 = document.getElementById("page2");
const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const mensaje = document.getElementById("mensaje"); 
 if(nombre.value.length<6){
  mensaje.innerHTML = `Los datos no son validos <br>`
  
 }
 else if(dni.value.length<8){
  mensaje.innerHTML = `Los datos no son validos <br>`
 }
 else{
  idPage3.classList.remove("ocultar");
  idPage2.classList.add("ocultar");
 }

});
 //boton siguiente1//
 const btnSiguiente1 = document.getElementById("submitBtn");
 btnSiguiente1.addEventListener("click",function(event){
 event.preventDefault() 
 //console.log("validar nro de tarjeta");
 const idPage4 = document.getElementById("page4");
 const idPage3 = document.getElementById("page3");
 let veririCard = luhnCheck()
 let masky= maskify()
 //console.log(veririCard)
 if(!veririCard){
     alert('Ingresar nro de tarjeta valido');
 }
 else {
 idPage4.classList.remove("ocultar");
 idPage3.classList.add("ocultar");
 alert(masky);
 alert('Nro de tarjeta correcto!');
 }
 });
 //boton salir//
 const btnSalir = document.getElementById("Salir");
 btnSalir.addEventListener("click",function(){
 const idPage1 = document.getElementById("page1");
 const idPage4 = document.getElementById("page4");
 idPage1.classList.remove("ocultar");
 idPage4.classList.add("ocultar");
 });
 
//Ocultar el numero de tarjeta menos los 4 ultimos digitos//
document.getElementById("submitBtn").addEventListener("click",function(){
  document.getElementById("resultLuhn").innerHTML = luhnCheck();
  document.getElementById("mask").innerHTML = maskify();
}, false); 
 