const dropdown = document.getElementById('dropdown-btn');
const dropdownItems = document.querySelectorAll('.dropdown-item');
var i;

dropdown.addEventListener('click', showMenu);

function showMenu() {
    document.getElementById('dropdown-menu').classList.toggle('show');
	dropdown.classList.toggle('btn-active');
}

dropdownItems.forEach(item => item.addEventListener('click', function() {
	dropdownItems.forEach(ditem => ditem.classList.remove("active"));
        dropdown.textContent = this.textContent;
	this.classList.add("active");
	showMenu();
})
);

