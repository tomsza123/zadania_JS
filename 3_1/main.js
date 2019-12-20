let ul = document.getElementsByTagName("ul");
let btn = document.querySelector("button");
ul[0].style.display = "none";
let li = document.getElementsByTagName("li");
let lastLi = li.length;
let fontSize = 10;

btn.addEventListener("click", zoom);

function zoom(){

    ul[0].style.display = "block";
    fontSize+=10;

    for(i = 0; i<=lastLi;i++){
        li[i].style.display = "block";
        li[i].style.fontSize = fontSize + "px";
    }
}
