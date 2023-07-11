//Contains the artial operation
let partial= "";
let ans="";
let result="";

//Elemento donde se colocan la operación que se está realizando
//let operRealizada= document.getElementById("");
//Elemento donde se coloca el resultado
let txtResul= document.getElementById("answer");
//txtResul.innerHTML="Hola";

//Último operador seleccionado
let operadorSeleccionado= "";

//Nomero ingresado
let numero= "";

//Para determinar si lu último presionado es un número o una operación
let ultimoDigitoPresionado= "";

/*
let p="5+5"
console.log("5+5");
p= eval(p);
console.log(p);
*/

function number(num){
    numero= numero + num;
    partial= partial + num;
    txtResul.innerHTML= partial;
    console.log("Desde adentro de la función")
}

function operator(opr) {
    operadorSeleccionado=opr;
    partial=partial+opr;
}

/*
pantalones
bodega
*/

function calculate(){
    result=eval(partial)
    txtResul.innerHTML=result;
}

function clean(){
    partial="";
    numero="";
    txtResul.innerHTML="0";
}