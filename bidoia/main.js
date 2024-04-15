const dataAtual=new Date( );
let dataObjetivo=prompt("qual data você está esperando?Exemplo 28/08/25");
dataObjetivo=new Date(dataObjetivo+"T23.59.59");
let diasQueFaltam=Math.floor((dataObjetivo-dataAtual)/8640000);
document.querySelector("#Dias_restantes").textComtent=diasQueFaltam;