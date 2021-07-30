const lista1 = [3,7,1,5,8,0,2,9];

lista1.sort(function(a,b){return a-b});

function dividirCadena(cadenaADividir,separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    document.write('<p>La cadena original es: "' + cadenaADividir + '"');
    document.write('<br>El separador es: "' + separador + '"');
    document.write("<br>El array tiene " + arrayDeCadenas.length + " elementos: ");
 
    for (var i=0; i < arrayDeCadenas.length; i++) {
       document.write(arrayDeCadenas[i] + " / ");
    }
 }
 
 var cadenaVerso = "Oh brave new world that has such people in it.";
 var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
 
 var espacio = " ";
 var coma = ",";
 
 dividirCadena(cadenaVerso, espacio);
 dividirCadena(cadenaVerso);
 dividirCadena(cadenaMeses, coma);
 