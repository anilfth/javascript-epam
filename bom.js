function openwindow(url){
    //let width=400;
    //let height=300;
    //let windowfeatures="width = "+width+
    //"height= "+height+
mywindow = window.open(url, "subwindow" ,width=400,height=400);
}

function showalert(){
    window.alert("hllo alertbox");
}
function resizewindow(){
    window.resizeBy(-100,-100);
}
function windowclose()
{
    if(window.confirm("do you want to close")){
    window.close();
}}
function showcount(){
    let visitpages=history.length;
    alert("you have visited"+visitedpages+"pages");
}