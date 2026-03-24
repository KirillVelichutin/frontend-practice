function dice() {
    const result = document.getElementById("result");
    const diceNum = document.getElementById("diceNum").value;
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];

    for(i = 0; i < diceNum; i++){
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="diceImages/${value}.png" alt="Dice ${value}" >`);
        }        
        result.textContent = `values: ${values.join(`, `)}`;
        diceImage.innerHTML = images.join(" ");
}