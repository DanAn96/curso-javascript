const lista1=[
    1,
    2,
    3,
    2,
    3,
    4,
    2,
    2,
    1,
];

const lista1cont ={

};

lista1.map(
    function(elemento){
        if(lista1cont[elemento]){
            lista1cont[elemento]+= 1;
        }else{
            lista1cont[elemento] = 1;
        }
        
    }
);

const lista1Array = Object.entries(lista1cont).sort(
    function(elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length-1];

