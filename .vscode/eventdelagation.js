let selectedTd;
let tb1 = document.getElementById("table1");
tb1.addEventListener("click", function(event){
let target = event.target;
while(target != this){
    if(target.tagName ==='TD'){
        changeColor(target);
        console.log("hello");
    }
    target = target.parentNode;
}
function  changeColor(cell){
    if(selectedTd){
        selectedTd.classList.remove('highlight');
    }
    selectedTd = cell;
    selectedTd.classList.add('highlight');
}
});