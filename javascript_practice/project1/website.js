const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
const numberCount = document.getElementById("numberCount");
let count = 0;

decreaseBtn.onclick = function(){
    count--;
    numberCount.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    numberCount.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    numberCount.textContent = count;
}