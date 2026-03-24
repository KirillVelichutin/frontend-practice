const temp = document.getElementById("temp");
const toFarenheit = document.getElementById("toFarenheit");
const toCelsius = document.getElementById("toCelsius");
const convTemp = document.getElementById("convTemp");
let numTemp;

function convert() {
    numTemp = Number(temp.value);

    if(toCelsius.checked){
        numTemp = 5 * (numTemp - 32) / 9;
        convTemp.textContent = numTemp.toFixed(1) + "F";

    } else if(toFarenheit.checked) {
        numTemp = (9 * numTemp / 5) + 32;
        convTemp.textContent = numTemp.toFixed(1) + "F";
    } else {
        convTemp.textContent = "Select a unit";
    }
}