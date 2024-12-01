function updateYear() {
    const yearElement = document.getElementById("current-year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

window.onload = updateYear;
