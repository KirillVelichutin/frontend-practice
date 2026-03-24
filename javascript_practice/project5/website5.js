function generator() {
    const result = document.getElementById("result");
    const symbolChars = "!@#$%^&*()_+-=?";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    let values = "";
    let password = "";

    values = symbolChars + lowerCase + upperCase + numberChars;

    for(i = 0; i < 9; i++){
        const randIndex = Math.floor(Math.random() * values.length);
        password += values[randIndex];
    }

    result.textContent = password;
}