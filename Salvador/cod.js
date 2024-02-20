function saludo(){
    alert ("hola JS")
}

function numeracion(tope){
for(i=0;i<=tope;i++)
{
    alert(i);
}}

function fondoParrafos(){
    parrafos=document.getElementsByTagName("p");
    parrafos[0].innerHTML="REEMPLAZADO";
    parrafos[1].style="color: red";
    lista=document.getElementsByClassName("verde");
    lista[0].style="text-align:center; color:blue";
    document.getElementById("exp").innerHTML="CONTENIDO ACTUAL";
}

function noEstilos(){
    nest=document.styleSheets.length;
    for (i=0;i<nest;i++){
        document.styleSheets[i].disabled=true;
    }
}

function activaEstilo(n){
    noEstilos();
    document.styleSheets[n].disabled=false;
}
