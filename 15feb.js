function createTable(){
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