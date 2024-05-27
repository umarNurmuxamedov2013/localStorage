// localStorage.removeItem("last")
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById('nameInput');
    const displayName = document.getElementById('displayName');
    const storedName = localStorage.getItem('name');

    if (storedName) {
        nameInput.value = storedName;
        displayName.textContent = `${storedName}`;
    }
});

function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        localStorage.setItem('name', nameInput);
        document.getElementById('displayName').textContent = `${nameInput}`;
    }
}