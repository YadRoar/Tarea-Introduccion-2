//Inicio de operaciones//



function suma() { 

   var x=parseInt(document.getElementById('n1').value);
   var y=parseInt(document.getElementById('n2').value);                 
   document.getElementById('res').innerHTML=x+y;

                }





function resta() {  
   
   var x=parseInt(document.getElementById('n1').value);
   var y=parseInt(document.getElementById('n2').value);
   document.getElementById('res').innerHTML=x-y;

                 }




function multiplicacion() {  
   
   var x=parseInt(document.getElementById('n1').value);
   var y=parseInt(document.getElementById('n2').value);
   document.getElementById('res').innerHTML=x*y;

                          }


// secciones//


document.getElementById("res").value; 


function toggleSection() {
   var contenedorOperaciones = document.getElementById("contenedorOperaciones");
   if (contenedorOperaciones.style.display === "none") {
    contenedorOperaciones.style.display= "block";
     document.getElementById("toggleBloque").textContent = "Ocultar operaciones";
   } else {
    contenedorOperaciones.style.display= "none";
     document.getElementById("toggleBloque").textContent = "Mostrar operaciones";
   }
 }












