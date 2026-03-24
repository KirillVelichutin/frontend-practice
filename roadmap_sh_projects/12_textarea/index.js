const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const max = 250;

textarea.addEventListener('input', wordCount);

function wordCount() {
    let charNumber = textarea.value.length;
    counter.textContent = `${charNumber} / ${max} `;
    if (charNumber === max) {
        counter.style.color = "red";
    }
}