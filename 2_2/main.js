/*
JAVASCRIPT
4.	ustawienie nasłuchiwanie (metoda addEventListener()) na scroll (pamietaj, że scroll jest zdarzenie na window) i wywołanie przy każdym skrolowaniu funkcji changeHeight. W przykładzie była użyta funkcja anonimowa natomiast teraz w metodzie addEventListener pośłużymy się funkcją, którą zadeklarujemy w zakresie globalnym (nazwij tę funkcję changeHeight).
5.	zadanie, które ma realizować funkcja: prostokąt (div) rośnie do 50% wysokości okna przeglądarki (window.innerHeight/2). Tylko wysokość zmieniamy, szerokość bez zmian.
6.	Po osiągnięciu 50% wysokości okna przeglądarki, nasz element div zaczyna maleć oraz zmienia kolor tła na czerwony. Wykorzystaj instrukcje warunkową i zmienną jako flagę (typ boolean).
7.	Kiedy wysokość div-a będzie mniejsza od 0 to odwracamy działanie: teraz ma znowu rośnie i zmienia kolor na zielony.
*/

document.body.style.height = 10000 + "px";
const div = document.createElement("div");
document.body.appendChild(div);
div.style.width = 100+"%";
div.style.position = "fixed";
div.style.left = 0;
div.style.top = 0;


let size = 1;
let grow = true;
div.style.height = size + "px";
div.style.backgroundColor = "green";

window.addEventListener("scroll", changeHeight);

function changeHeight(){
    if(size >= window.innerHeight / 2){
        grow = !grow;
        div.style.backgroundColor = "green";
    }
    else if(size <= 0){
        grow = !grow;
        div.style.backgroundColor = "red";
    }
    if(grow){
        size += 20;
        div.style.height = size + "px";
    }
    else{
        size -= 20;
        div.style.height = size + "px";
    }
    
    
}