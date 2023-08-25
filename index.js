const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu-button');

menu.addEventListener('click' , () =>{
    navbar.classList.toggle('navbar-hide');
    navbar.classList.toggle('navbar-show');
});

let anchorSelector = 'a[href^="#"]';
     
// Collect all such anchor links
let anchorList =
    document.querySelectorAll(anchorSelector);
 
// Iterate through each of the links
anchorList.forEach(link => {
    link.onclick = function (e) {

        // Prevent scrolling if the
        // hash value is blank
        e.preventDefault();
 
        // Get the destination to scroll to
        // using the hash property
        let destination =
            document.querySelector(this.hash);
 
        // Scroll to the destination using
        // scrollIntoView method
        destination.scrollIntoView({
            behavior: 'smooth'
        });
    }
});