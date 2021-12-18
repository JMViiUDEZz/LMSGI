console.log ('Cargando app.js');
let pcoste = 2000;
const iva = 0.16;

pcoste=10;
calcularPVP(pcoste,iva);
console.log ('--producto1--')
console.log ('precio de coste =',pcoste,'€');
console.log ('iva =',iva*100,'%','-->','pcoste*iva');
console.log ('PVP =',pcoste*(1+iva),'€');
console.log ('--producto2--')
pcoste = 1000;
console.log ('precio de coste =',pcoste,'€');
console.log ('iva =',iva*100,'%','-->','pcoste*iva');
console.log ('PVP =',pcoste*(1+iva),'€');
console.log ('--producto3--')
pcoste = 500;
console.log ('precio de coste =',pcoste,'€');
console.log ('iva =',iva*100,'%','-->','pcoste*iva');
console.log ('PVP =',pcoste*(1+iva),'€');
console.log ('--producto4--')
pcoste = 500;
console.log ('precio de coste =',pcoste,'€');
console.log ('iva =',iva*100,'%','-->','pcoste*iva');
console.log ('PVP =',pcoste*(1+iva),'€');

//js-->JavaScript ES6
//Las funciones se reescriben (acortar)-->arrow function
//una variable que contiene una funcion y se llama calcularPVP
const calculatorPVP1 = function (precio,impuesto){
    console.log ('precio de coste =',pcoste,'€');
    console.log ('iva =',iva*100,'%','-->','pcoste*iva');
    console.log ('PVP =',pcoste*(1+iva),'€');
}
//la funcion anterior se reescribe en notacion Arrown Function (cambia function que estaba a la izquierda a una flecha a la derecha, argumentos a la izquierda y el cuerpo igual)
 const calcularPVP = (precio,impuesto) => {
    console.log ('precio de coste =',pcoste,'€');
    console.log ('iva =',iva*100,'%','-->','pcoste*iva');
    console.log ('PVP =',pcoste*(1+iva),'€');
    return precio * (1 + impuesto)
 }
//llamadas a la funcion
let ptotal = calcularPVP(pcoste,iva);
console.log (ptotal);

//funcion externa-->la funcion se llama calcularPVP1
function calcularPVP(precio,impuesto){
console.log ('precio de coste =',pcoste,'€');
console.log ('iva =',iva*100,'%','-->','pcoste*iva');
console.log ('PVP =',pcoste*(1+iva),'€');
}
//function o =>, argumentos, cuerpo(instrucciones), return

function sumar1(x,y){
//instruccion 1;
//instruccion 2;
//...
//instruccion n;

/* son equivalentes solo cuando el cuerpo de la funcion tiene 1 sola instruccio
return (x + y);
}
//primera forma
const sumar2 = (x,y) => {
return (x + y);
}
// o
const sumar2 = (x,y) => x + y ;

//segunda forma
let suma = sumar2(3,6);
console.log(suma)*/

const cubo1 = (x) => {
return (x * x * X)
}

const cubo = (x) => x * x * x;

console.log(cubo(5,2));

const potencia = (b,e) => {
    let res = 0;
    for(i=1;i<=e; i++){
        res=res*b
    }
    return res;
/*
CONTADOR
i = 20
i <= 20 ejecuta ejecuta el cuerpo
cuando finaliza el cuerpo
i++ --> i=i+1=21
i=21 <= No ejecuta el cuerpo
SALE DEL BUCLE
*/
/*ACUMULADOR(nomina o saldo anual)
*/
}
console.log (potencia (2,4));

//sumar los n primeros numeros

const suma10 = ( n ) => {
    let stotal = 0;
    for (i = 0; i <= n ; i ++){
    stotal = stotal + i;
}
return stotal;}

console.log (suma10 ( 2 ));
console.log (suma10 ( 5 ));
console.log (suma10 ( 100 ));

//factorial

const factorial ( n ) => {

}
console.log (factorial(5));