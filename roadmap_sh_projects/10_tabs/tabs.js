function displayContent(tabName) {
    const getElement = document.querySelectorAll(".tabContent");
    getElement.forEach (tab => tab.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
}