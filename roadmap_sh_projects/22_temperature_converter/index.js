// Getting access to all necessary elements
const inputTemp = document.getElementById('temperature-input');
const result = document.getElementById('result');
const btn = document.getElementById('convert-btn');
const fromUnit = document.getElementById('from-unit');
const toUnit = document.getElementById('to-unit');

// Adding event listeners to track the fields being filled
fromUnit.addEventListener('change', checkInput);
toUnit.addEventListener('change', checkInput);
inputTemp.addEventListener('input', checkInput);

// Function to enable the converter button when all the fields being filled
function checkInput() {
	if (inputTemp.value && fromUnit.value && toUnit.value) {
		btn.disabled = false;
	} else {
		btn.disabled = true;	
	}
}

// Temperature conversion function
function conversion() {
	let temp = parseFloat(inputTemp.value);
	let from = fromUnit.value;
	let to = toUnit.value;

	let convertedTemp = 0;

	if (from === to) {
		convertedTemp = temp;

	} else if (from === 'Celsius') {
		if (to === 'Kelvin') {
			convertedTemp = temp + 273,15;
		} else if (to === 'Fahrenheit') {
			convertedTemp = temp * 1.8 + 32;
		}

	} else if (from === 'Fahrenheit') {
		if (to === 'Celsius') {
			convertedTemp = (temp - 32) / 1.8;
		} else if (to === 'Kelvin') {
			convertedTemp = (temp + 459.67) * 5 / 9;
		}

	} else if (from === 'Kelvin') {
		if (to === 'Celsius') {
			convertedTemp = temp - 273.15;
		} else if (to === 'Fahrenheit') {
			convertedTemp = temp * 9 / 5 - 459.67;
		}
	}

	return convertedTemp;
}

// Call the temperature conversion function
btn.addEventListener('click', function (e) {
	e.preventDefault();
	
	const convertionResult = conversion();
	result.textContent = `${inputTemp.value} ${fromUnit.value} is ${convertionResult.toFixed(1)} ${toUnit.value}`;	
});