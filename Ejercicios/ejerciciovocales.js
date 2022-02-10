
var cajita = document.getElementById("cajita");
cajita.addEventListener("keyup", showKey)

function showKey(event){
    console.log("Has clickado la tecla, " + event.code + " y le correponde el " + event.keyCode)
    if (event.keyCode == "65"){
        cajita.style.color = "red"
    }
    else if (event.keyCode == "69"){
        cajita.style.color = "red"
    }
    else if (event.keyCode == "73"){
        cajita.style.color = "red"
    } 
    else if (event.keyCode == "79"){
        cajita.style.color = "red"
    }
    else if (event.keyCode == "85"){
        cajita.style.color = "red"
    }
    else {
        cajita.style.color = "blue"
    }
}
