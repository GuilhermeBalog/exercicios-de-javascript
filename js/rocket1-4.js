function experienceLevel(studyYears){
    if(studyYears >= 0 && studyYears <= 1){
        return "Beginer"
    } else if(studyYears < 3){
        return "Medium"
    } else if(studyYears < 7){
        return "Advanced"
    } else if(studyYears >= 7){
        return "Jedi Master"
    } else {
        return "Invalid Value"
    }
}

document.querySelector("#rocket1-4 .trigger").onclick = function(){
    var studyYears = parseInt(document.querySelector("#rocket1-4 .input").value)
    document.querySelector("#rocket1-4 .result").innerHTML = "Your level is " + experienceLevel(studyYears)
}