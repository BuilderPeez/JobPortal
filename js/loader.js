const loader = document.querySelector(".loadc");

window.addEventListener("load", function(){
    this.setTimeout(myload, 1000 * 2)
        
})

function myload(){
    loader.style.display = "none";
    document.body.style.overflow = "auto";
    
}