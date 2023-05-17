/*Math in JS*/
/*let round = Math.round(8.5);
let pow = Math.pow(4,2);
let sqrt = Math.sqrt(81);
let abs = Math.abs(-12.8);
let ceil = Math.ceil(4.3);
let floor = Math.floor(8.9);
let min = Math.min(12,11,2,34,5);
let max = Math.max(12,11,2,34,5);
let trunc = Math.trunc(4.3);
document.write(trunc);*/

/* localStorage(mahalliy ombor) in JS*/
/*
localStorage.setItem('ism','Olov');
localStorage.setItem('familiya','Sayfullayev');
localStorage.setItem('yoshi','14');

localStorage['ism'] = 'Olovuddin';
localStorage['familiya'] = 'Sayfullayev';
localStorage.removeItem('ism')

localStorage.clear()

let uningismi = localStorage.getItem('ism');
let uningfamiliyasi = localStorage.getItem('familiya');
let uningyoshi = localStorage.getItem("yoshi");

console.log(uningismi,uningfamiliyasi,uningyoshi);*/

/* https request in Js*/
/*
let sorov = new XMLHttpRequest();
sorov.open('get','https://getty.uz/serverdan/malumot/olish'); /!*get,post*!/
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}*/

/* JSON in JS */
/*
let object = {ism:"Olovuddin", yoshi:14}; /!* => JS object file *!/
let json = '{"ism"; "Olovuddin", "yoshi";13}' /!* => Json file *!/

console.log(JSON.parse(json));
*/

let sorov = new XMLHttpRequest();
sorov.open('get','sublime.txt');
sorov.send();
sorov.onload = function (){
    console.log(sorov.responseText);
}