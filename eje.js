function perimetroCuadrado(lado) {
    return lado * 4;
  }
  // console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");
  
  function areaCuadrado(lado) {
    return lado * lado;
  }

  function calcularPerimetroCuadrado() {
    const entrada = document.getElementById("inputc");
    const valor = entrada.value;
  
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
    return perimetro;
  }
  function calcularAreaCuadrado() {
    const valor = document.getElementById("inputc");
    const val = valor.value;
    
  
    const area = areaCuadrado(val);
    alert(area);
    return area;
  }