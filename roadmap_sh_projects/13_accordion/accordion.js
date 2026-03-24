const accordionHeading = document.getElementsByClassName('accordion-heading');
var i;


for (i = 0; i < accordionHeading.length; i++) {
accordionHeading[i].addEventListener('click', function() {
	let accordionContent = this.nextElementSibling; 
	this.classList.toggle('active');
	if (accordionContent.style.height) {
		accordionContent.style.height = null;
		setTimeout(function() {accordionContent.style.display = 'none';}, 199)
	} else {
		accordionContent.style.display = 'block'
		setTimeout(function() {accordionContent.style.height = '70px';}, 1)
	}}
)}