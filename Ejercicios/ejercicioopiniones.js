function showresult(){
    document.getElementById("result").innerHTML = "<b>El usuario ha dicho que </b>" + document.getElementById("myInput").value
}

function keyEnter(event){
    if (event.keyCode === 13){
        showresult();
        console.log("enter")
    }
}