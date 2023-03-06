function validateInput(){
    let value1 = document.getElementById("textbox1").value;
    let ptag = document.getElementById("ptag");
    ptag.innerHTML = ",";
    try{
        if((value1.trim()== "")){
            throw "Textbox is empty";
        }
        if(isNaN(value1)){
            throw "NOt s number";
        }
         // convert to number to comapre whether it is btw 1 and 100
         value1 = Number(value1);
         if(value1<1){
            throw "Number is less than 1";
         } 
         if(value1 > 100){
            throw "number is greater than 100";
         }
    }
    catch(err){
        ptag.innerHTML = "error is :"+ err;
    }
    finally{
        document.getElementById("textbox1").value="";
    }
}