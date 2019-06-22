function getRandomColor(){
    const hexScale = "0123456789ABCDEF"
    var color = "#"
    for(i = 0; i < 6; i++){
        color += hexScale[Math.floor(Math.random() * 16)]
    }

    return color;
}