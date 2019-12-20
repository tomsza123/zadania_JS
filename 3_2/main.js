let size = 10;
let orderElement = 1;

const init = () => {
    let button = document.createElement("button");
    button.style.float = "left";
    button.textContent = "naciśnij";
    document.body.appendChild(button);

    let reset = document.createElement("button");
    reset.style.float = "left";
    reset.textContent = "reset";
    document.body.appendChild(reset);

    let ul = document.createElement("ul");
    ul.style.clear = "both";
    document.body.appendChild(ul);

    button.addEventListener("click",createLiElements);
    reset.addEventListener("click", resetLiElements);
}

const createLiElements = () => {
    let ul = document.querySelector("ul");
    
    for(i=0;i<10;i++){
        let li = document.createElement("li");
        li.textContent = "element " + orderElement;
        orderElement+=1;
        li.style.fontSize = size+"px";
        size += 1;
        li.style.display = "block";
        ul.appendChild(li);
    }
}

const resetLiElements = () => {
    let li = document.getElementsByTagName("li");
    
    for(i=0;i<li.length;i++){
        li[i].innerHTML = "";
    }

    size = 10;
    orderElement = 1;
}


init()