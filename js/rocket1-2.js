function odds(x, y){
    document.querySelector("#rocket1-2 .result").innerHTML = ""
    for(var i = x; i <= y; i++){
        if(i % 2 == 0){
            document.querySelector("#rocket1-2 .result").innerHTML += i + " "
        }
    }
}

document.querySelector("#rocket1-2 .trigger").onclick = function(){
    odds(32, 231)
}