form.onclick=function(event){
    event.target.style.backgroundColor = 'yellow';

    //crome need some time to print yellow color

    setTimeout(()=> {
        alert("target ="+ event.target.tagName+" , this=" + this.tagName);
        event.target.style.backgroundColor = ''
}, 1);
};