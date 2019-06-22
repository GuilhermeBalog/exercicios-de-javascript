var input = document.querySelector("#rocket2-4 .input")

document.querySelector("#rocket2-4 .trigger").onclick = function(){    
    if(input.value != ""){
        addListItem(input.value)
        input.value = ""
    }
}