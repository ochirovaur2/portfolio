

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}





base = {
  home: document.querySelector("#home"),
  contact: document.querySelector("#contact"),
  showcase: document.querySelector(".showcase"),
  contactForm: document.querySelector(".contact-form"),
  close: document.querySelector("#close")
}

showAndHideContactForm = (center, outFromView, percentCenter, percentOut) => {

  center.style.right = `${percentCenter}%`;
  outFromView.style.right = `${percentOut}%`;

}

toggleUnderline = (add, remove) => {
  add.classList.add("current");
  remove.classList.remove("current");
}
const closeContactForm = [base.close, base.home];

for(let i = 0; i < closeContactForm.length; i++) {
  closeContactForm[i].onclick = ()=> {

    
    toggleUnderline(base.home, base.contact);
    
    base.contactForm.style.transform = "scale(2) translateX(-75%) translateY(-75%) rotate(-28deg)";
  }
}


base.contact.onclick = ()=> {
  
  toggleUnderline(base.contact, base.home);
  

  base.contactForm.style.transform = "scale(1) translateX(0) translateY(0) rotate(0)";
  
}



$('#viewWorkBtn').on('click', function(e){
          
          if(this.hash !== "") {
            
            e.preventDefault();
            
            const hash = this.hash;
            $('html, body').animate(
              {
                scrollTop: $(hash).offset().top
              }, 700
            );
          }
        });

