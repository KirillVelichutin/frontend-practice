function clock(){
    const time = new Date();
    const hours = time.getHours().toString().padStart(2, 0);
    const minutes = time.getMinutes().toString().padStart(2, 0);
    const seconds = time.getSeconds().toString().padStart(2, 0);
    const displayTime = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = displayTime;
}

clock();
setInterval(clock, 1000)