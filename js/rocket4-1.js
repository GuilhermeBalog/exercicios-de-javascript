function checkAge(age){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
           return (age >= 18)? resolve() : reject() 
        }, 2000)      
    })
}

document.querySelector("#rocket4-1 .trigger").onclick = function(){
    checkAge(document.querySelector("#rocket4-1 .input").value)
        .then(function(){
            document.querySelector("#rocket4-1 .result").innerHTML = "You are older than 18"
        })
        .catch(function(){
            document.querySelector("#rocket4-1 .result").innerHTML = "You are younger than 18"
        })
}