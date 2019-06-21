skills = ["Javascript", "ReactJS", "React Native"]

function hasJavascriptSkill(skillList){
    return skillList.indexOf("Javascript") !== -1
}

document.querySelector("#rocket1-3 .instructions").innerHTML = JSON.stringify(skills)
document.querySelector("#rocket1-3 .trigger").onclick = function(){
    document.querySelector("#rocket1-3 .result").innerHTML += hasJavascriptSkill(skills)
}