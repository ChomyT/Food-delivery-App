var hamburger = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile')
hamburger.addEventListener('click', () => {
  if(mobileMenu.style.display == 'block'){
    mobileMenu.style.display = 'none'
  
  }else {
    mobileMenu.style.display = 'block'
  }
  
})

/*function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click" , () => {
        faq.classList.toggle("active");
    });
});