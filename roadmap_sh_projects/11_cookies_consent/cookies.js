const conteiner = document.getElementById('cookies');
const confirmed = localStorage.getItem("cookies");

function checkCookiesConfirmed () {
	if (confirmed !== "confirmed") {
		conteiner.style.display = 'flex';
	}
}

function closeCookiesMessage () {
	conteiner.style.display = 'none';
}

function cookiesConfirmed () {
	conteiner.style.display = 'none';
	localStorage.setItem("cookies", "confirmed");
}