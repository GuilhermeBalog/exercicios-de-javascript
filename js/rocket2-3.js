var names = ["Jack", "Mary", "Tony"]

function addListItem(text){
    var listItem = document.createElement("li")
    var listItemText = document.createTextNode(text)

    listItem.appendChild(listItemText)

    document.querySelector("#rocket2-3 .result ul").appendChild(listItem)
}

function printNameList(){
    for(name of names){
        addListItem(name)
    }
}

document.querySelector("#rocket2-3 .trigger").onclick = printNameList;
document.querySelector("#rocket2-3 .instructions").innerHTML = "var names = " + JSON.stringify(names)