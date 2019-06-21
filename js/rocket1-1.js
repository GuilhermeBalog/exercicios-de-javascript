var sampleAdress = {
    street: "Paulista",
    number: 1293,
    neighborhood: "Center",
    city: "São Paulo",
    uf: "SP",
    country: "Brazil"
}

function printUserAdress(adressObject){
    alert(`The user lives in ${adressObject.city} / ${adressObject.uf}, ${adressObject.neighborhood} neighborhood, \"${adressObject.street}\" Street, nº ${adressObject.number}.`)
}

document.querySelector("#rocket1-1 .instructions").innerHTML = "var sampleAdress = " + JSON.stringify(sampleAdress, null, "\t")
document.querySelector("#rocket1-1 .trigger").onclick = function(){
    printUserAdress(sampleAdress);
}