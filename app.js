const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
     //toggle nav
    burger.addEventListener('click',()=>{
        const isOpen = nav.classList.toggle('nav-active');
        // tell screen readers whether the menu is open
        burger.setAttribute('aria-expanded', isOpen);
        burger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`; 
            }
       });
        
    });
     //animate links
      
}
navSlide();