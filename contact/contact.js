function prac(event) {
    event.preventDefault();

    const username = document.forms["contact-form"]["name"].value.trim();
    const email = document.forms["contact-form"]["email"].value.trim();

    if (username === "") {
        alert("Please enter a valid Username");
        return false;
    }

    if (email === "") {
        alert("Please enter a valid Email");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

window.onload = function () {
    const form = document.forms["contact-form"];
    if (form) {
        console.log("Form is found!");
        form.addEventListener("submit", prac);
    } else {
        console.error("Form is not found!");
    }
}

function gohome() {
    window.location.href = '../home-page.html';
}
