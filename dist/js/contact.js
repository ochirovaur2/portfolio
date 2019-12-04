base = {
	home: document.querySelector("#home"),
	contact: document.querySelector("#contact"),
	showcase: document.querySelector(".showcase"),
	contactForm: document.querySelector(".contact-form")
}

showAndHideContactForm = (center, outFromView, percentCenter, percentOut) => {

	center.style.right = `${percentCenter}%`;
	outFromView.style.right = `${percentOut}%`;

}

toggleUnderline = (add, remove) => {
	add.classList.add("current");
	remove.classList.remove("current");
}

base.home.onclick = ()=> {

	
	toggleUnderline(base.home, base.contact);
	
	base.contactForm.style.transform = "scale(2) translateX(-75%) translateY(-75%) rotate(-28deg)";
}

base.contact.onclick = ()=> {
	
	toggleUnderline(base.contact, base.home);
	

	base.contactForm.style.transform = "scale(1) translateX(0) translateY(0) rotate(0)";
}