let operandoA;
let operandoB;
let operacion;

function init(){
   let resultado = document.getElementById("resultado");
   let suma = document.getElementById("sumar");
   let resta = document.getElementById("restar");
   let multiplicacion = document.getElementById("multiplicar");
   let division = document.getElementById("dividir");
   let borrar = document.getElementById("borrar");
   let igual = document.getElementById("igual");
   let uno = document.getElementById("uno");
   let dos = document.getElementById("dos");
   let tres = document.getElementById("tres");
   let cuatro = document.getElementById("cuatro");
   let cinco = document.getElementById("cinco");
   let seis = document.getElementById("seis");
   let siete = document.getElementById("siete");
   let ocho = document.getElementById("ocho");
   let nueve = document.getElementById("nueve");
   let cero = document.getElementById("cero");

   //Agregar eventos
   uno.onclick = function(e){
      resultado.textContent = resultado.textContent + "1";
   }
   dos.onclick = function(e){
      resultado.textContent = resultado.textContent + "2";
   }
   tres.onclick = function(e){
      resultado.textContent = resultado.textContent + "3";
   }
   cuatro.onclick = function(e){
      resultado.textContent = resultado.textContent + "4";
   }
   cinco.onclick = function(e){
      resultado.textContent = resultado.textContent + "5";
   }
   seis.onclick = function(e){
      resultado.textContent = resultado.textContent + "6";
   }
   siete.onclick = function(e){
      resultado.textContent = resultado.textContent + "7";
   }
   ocho.onclick = function(e){
      resultado.textContent = resultado.textContent + "8";
   }
   nueve.onclick = function(e){
      resultado.textContent = resultado.textContent + "9";
   }
   cero.onclick = function(e){
      resultado.textContent = resultado.textContent + "0";
   }

   //operaciones
   suma.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = "+";
      limpiar();
   }
   resta.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = "-";
      limpiar();
   }
   multiplicacion.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = "*";
      limpiar();
   }
   division.onclick = function(e){
      operandoA = resultado.textContent;
      operacion = "/";
      limpiar();
   }

   igual.onclick = function(e){
      operandoB = resultado.textContent;
      resolver();
   }

   borrar.onclick = function (e){
      resetear();
   }
}

//funciones

function limpiar(){
   resultado.textContent="";
}

function resolver(){
   let res = 0;
   switch(operacion){
      case "+":
         res = parseFloat(operandoA) + parseFloat(operandoB);
         break;
      case "-":
         res = parseFloat(operandoA) - parseFloat(operandoB);
         break;   
   
      case "*":
         res = parseFloat(operandoA) * parseFloat(operandoB);
         break;
      case "/":
         res = parseFloat(operandoA) / parseFloat(operandoB);
         break;   
   }
   resetear();
   resultado.textContent = res;
}

function resetear(){
   resultado.textContent ="";
   operandoA = 0;
   operandoB = 0;
   operacion = 0;
}