document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (fullname && email && password) {
      localStorage.setItem("username", fullname);
      window.location.href = "../home-page.html";
    } else {
      alert("Please fill out all required fields.");
    }
  });
});
