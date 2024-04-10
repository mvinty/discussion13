

//1. alert on load
window.onload = function() {
    alert(document.querySelectorAll("figcaption")[1].textContent);
}

//2. mouse over 
let images = document.querySelectorAll(".thumbnail");

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", function() {
        
        console.log(this.alt);
    });
}