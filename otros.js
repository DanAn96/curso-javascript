
function s(a,b){
 var res=a+b;
 return res;
}

function suma(){
    var euno = document.getElementById("uno");
    var val1 = parseInt (euno.value);
    
    var edos = document.getElementById("dos");
    var val2 = parseInt (edos.value);
    
    var r= s(val1,val2);
    var pa1 = document.getElementById("p1");
    var pa = pa1.value;
   
    alert(r,);

}

let auno = ["Rony", "Ilsi", "Dani", "Angel"];
let ados = [35,35,7,3]

var ob ={a: auno[2],
    b: ados[2]};

alert(ob.a+ob.b);