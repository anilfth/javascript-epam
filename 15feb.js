function printMassage(){
    document.getElementById("para1").innerHTML += "We are learning basic javascript in inner HTML";
    // document.getElementById("para1").innerHTML = "nothing";
    // if we are using class then 
    document.getElementsByClassName("p1").innerHTML += "We are learning basic javascript in inner HTML";


    document.getElementById("para1").style.color = "red";
    document.getElementById("para1").style.border = "2px solid black";

}
 // div function
 function formatDiv(){
    document.getElementById("btn2").classList.add("drawdiv");
    document.getElementById("btn1").classList.add("drawdiv");

 }

function createTable(){
    document.getElementById("table").style.color = "pink";
    const tb1 = document.createElement("table");
    const tbd = document.createElement("tbody");
    for(let i=0;i<5;i++){  // creating rows
    let rows = document.createElement("tr")
    for(let j=0;j<5;j++){
        // creating a columns
        let cols = document.createElement("td");
let textdata = document.createTextNode("Name");
cols.appendChild(textdata);
rows.appendChild(cols);
    }
    tbd.appendChild(rows);
    }
    // tbd.appendChild(rows);
    tb1.appendChild(tbd);
    document.body.appendChild(tb1);
    tb1.setAttribute("border",1);
}