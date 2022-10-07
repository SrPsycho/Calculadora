var cero=document.getElementById("num0"); 
var uno=document.getElementById("num1");
var dos=document.getElementById("num2");
var tres=document.getElementById("num3");
var cuatro=document.getElementById("num4");
var cinco=document.getElementById("num5");
var seis=document.getElementById("num6");
var siete=document.getElementById("num7");
var ocho=document.getElementById("num8");
var nueve=document.getElementById("num9");
//Acciones
var borrarTodo=document.getElementById("AC");
var borrar=document.getElementById("C");
var raiz=document.getElementById("raiz")
var resto=document.getElementById("resto");
var sumar=document.getElementById("mas");
var restar=document.getElementById("menos");
var dividir=document.getElementById("dividir");
var multiplicar=document.getElementById("multiplicar");
var igual=document.getElementById("igual");
//No estoy seguro si esto de arriba sirve para algo xd
var historial=document.getElementById("historial");
var coma=document.getElementById('.');

var pruebas=document.getElementById("prueba");

var num1="";
var num2="";
var operacion='';
var  resultado="";

cero.onclick = function(e){
    historial.textContent = historial.textContent + '0';
}
uno.onclick = function(e){
    historial.textContent = historial.textContent + '1';
}
dos.onclick = function(e){
    historial.textContent = historial.textContent + '2';
}
tres.onclick = function(e){
    historial.textContent = historial.textContent + '3';
}
cuatro.onclick = function(e){
    historial.textContent = historial.textContent + '4';
}
cinco.onclick = function(e){
    historial.textContent = historial.textContent + '5';
}
seis.onclick = function(e){
    historial.textContent = historial.textContent + '6';
}
siete.onclick = function(e){
    historial.textContent = historial.textContent + '7';
}
ocho.onclick = function(e){
    historial.textContent = historial.textContent + '8';
}
nueve.onclick = function(e){
    historial.textContent = historial.textContent + '9';
}
//Acciones
coma.onclick= function(e){
    historial.textContent=historial.textContent+".";
}
borrarTodo.onclick = function(e){
    resetear();
}
borrar.onclick = function(e){
    miniReset();
}
//Acciones simples
sumar.onclick = function(e){
    num1= historial.textContent;
    operacion='+';
    pruebas.textContent=num1+' '+operacion;
    limpiar();
}
restar.onclick = function(e){
    num1= historial.textContent;
    operacion='-';
    pruebas.textContent=num1+' '+operacion;
    limpiar();
}
multiplicar.onclick = function(e){
    num1= historial.textContent;
    operacion='*';
    pruebas.textContent=num1+' '+operacion;
    limpiar();
}
dividir.onclick = function(e){
    num1= historial.textContent;
    operacion='/';
    pruebas.textContent=num1+' '+operacion;
    limpiar();
}
resto.onclick = function(e){
    num1= historial.textContent;
    operacion='%';
    pruebas.textContent=num1+' '+operacion;
    limpiar();
}
raiz.onclick = function(e){
    num1= historial.textContent;
    operacion='√';
    pruebas.textContent=num1+' '+operacion;
    resolver();
}
igual.onclick = function(e){
    num2=historial.textContent;
    resolver();
}
//Metodos
function limpiar(){
    historial.textContent='';
}
function resetear(){
    historial.textContent='';
    num1=0;
    num2=0;
    operacion='';
    pruebas.textContent='';
}
function miniReset(){
    historial.textContent='';
    if(num1!=''){
        num2=0;
    }else{
        num1=0;
    }
}
function resolver(){
    var res=0;
    switch (operacion){
        case '+':
            res= parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            res= parseFloat(num1) - parseFloat(num2);
            break;
        case '*':
            res= parseFloat(num1) * parseFloat(num2);
            break;
        case '/':
            res= parseFloat(num1) / parseFloat(num2);
            break;
        case '%':
            res= parseFloat(num1) % parseFloat(num2);
            break;
        case '√':
            res= Math.sqrt(num1);
            break;
    };
    resetear();
    historial.textContent = res;
}
var icono=document.getElementById("icon");
//Modo nocturno y el otro feo xd
var  contador=0;
function cambiar(){
    
    if(contador==0){
        document.getElementById("body").style.background= "white"
        document.getElementById("body").style.color= "black";
        document.getElementById("prueba").style.color= "black";
        document.getElementById("historial").style.color= "black";
        icono.style.color="black"
        icono.className="fa-solid fa-moon";
        contador++;
    }else{
        document.getElementById("body").style.background= "rgb(43, 41, 41)"
        document.getElementById("body").style.color= "aliceblue";
        document.getElementById("prueba").style.color= "#fff";
        document.getElementById("historial").style.color= "#fff";
        icono.style.color="yellow"
        icono.className="fa-solid fa-sun";
        contador--;
    }
}

