const dropdown = document.getElementById('dropdown-btn');
let dropdownItems = document.getElementsByClassName('dropdown-item');
var i;

dropdown.addEventListener('click', showMenu);

function showMenu() {
    document.getElementById('dropdown-menu').classList.toggle('show');
}

for (i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function() {
        dropdown.textContent = "item";
    });
}