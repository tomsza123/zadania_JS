const square = document.createElement('div');
document.body.appendChild(square);
let size = 100; //wielkosc kwadratu
square.style.width = size + "px";
let grow = true;
//zmiana wielkosci kwadratu za pomoca scrolla
//maksymalna wielkosc kwadratu
//window.innerWidth * 0.5

window.addEventListener("scroll",function(){
    if(size >= this.window.innerWidth / 2){
        grow = !grow;
    }
    else if(size == 0){
        grow = !grow;
    }

    if(grow){
        size += 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
    else{
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
})
