// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();

console.group("isosceles");

function alturaIsosceles(lado1,lado2,base){
    if(lado1==lado2){
        if(lado1>base){
            alert("si es un isosceles");
            altura=Math.sqrt((lado1*lado1)-((base*base)/4));
            return altura;
        }
    }else{
        alert("no es un triangulo isosceles");
    }

}

console.groupEnd;


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function CalcularPerimetroTriangulo(){
   const input1 = document.getElementById("lado1");
    const plado = input1.value;
     const input2 = document.getElementById("lado2");
    const slado = input2.value;
   const input3 = document.getElementById("base");
    const pbase = input3.value;
   n1=Number(plado);
   n2=Number(slado);
   n3=Number(pbase);
    const perimetro=perimetroTriangulo(n1,n2,n3);
    alert(perimetro);
    
}

function CalcularAreaTriangulo(){
    const input1 = document.getElementById("baset");
    const baset = input1.value;
    const input2 = document.getElementById("altura");
    const altura = input2.value;
    const area = areaTriangulo(baset,altura);
    alert(area);
}

function CalcularDiametroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function CalcularAreaCirculo(){
    const input = document.getElementById("radio");
    const radio = input.value;
    const area = areaCirculo(radio);
    alert(area);
}

function CalcularAlturaIsosceles(){
    const input1 = document.getElementById("ladoi1");
    const ladoi1 = input1.value;
    const input2 = document.getElementById("ladoi2");
    const ladoi2 = input2.value;
    const input3 = document.getElementById("basei");
    const basei = input3.value;
    const altura = alturaIsosceles(ladoi1,ladoi2,basei);
    alert(altura);
}