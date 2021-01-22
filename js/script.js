
function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

console.log("suma 1:"+sumar(5,4));

function otraFuncion(funcion,a,b){

    console.log(funcion(a,b));

}

otraFuncion(sumar,2,1);

otraFuncion(restar,2,1);