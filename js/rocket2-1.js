function addButton(){
    var square = document.createElement("div")
    square.style.width = 100
    square.style.height = 100
    square.style.backgroundColor = "#c80000"
    square.style.display = "inline-block"
    square.style.margin = 5

    square.onmouseover = function(){
        square.style.backgroundColor = getRandomColor()
    }

    document.querySelector("#rocket2-1 .result").appendChild(square)
}

document.querySelector("#rocket2-1 .trigger").onclick = addButton;