var users = [
    {
        name: "Diego",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Gabriel",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]

function printUsersSkills(userList){
    document.querySelector("#rocket1-5 .result").innerHTML = ""
    for(var user of userList){
        document.querySelector("#rocket1-5 .result").innerHTML += `${user.name} has the skills ${user.skills.join(', ')}<br>`
    }
}

document.querySelector("#rocket1-5 .instructions").innerHTML = "var users = " + JSON.stringify(users, null, "\t")
document.querySelector("#rocket1-5 .trigger").onclick = function(){
    printUsersSkills(users)
} 