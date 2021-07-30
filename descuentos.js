function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function CalcularDescuento() {
    const entp1 = document.getElementById("precio");
    const precio = entp1.value;
    
    const entp2 = document.getElementById("cupon");
    const descuento = entp2.value;
  
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  
  
  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });

  function desc(precio,descuento){
   
      var total=(precio*(100-descuento)/100);
      return total;

  }

  function CalcularDesc(){
   

  const input1 = document.getElementById("pre");
  const precio = input1.value;
  
  const input2 = document.getElementById("cup");
  const cupon = input2.value;

  let descuento;

  switch(cupon) {
    case "cup1":
      descuento = 15;
    break;
    case "cup2":
      descuento = 25;
    break;
    case "cup3":
      descuento = 30;
    break;
      }

    
    const tot = desc(precio,descuento);
    const r = document.getElementById("r");
    r.innerText = "total a pagar es "+tot;

  }