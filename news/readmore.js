function showPopup(message) {
    const popup = document.getElementById("popupBox");
    const overlay = document.getElementById("popupOverlay");
    const messageBox = document.getElementById("popupMessage");

    messageBox.textContent = message;
    popup.style.display = "block";
    overlay.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popupBox");
    const overlay = document.getElementById("popupOverlay");

    popup.style.display = "none";
    overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("popupOverlay");
    if (overlay) {
        overlay.addEventListener("click", closePopup);
    }
});
