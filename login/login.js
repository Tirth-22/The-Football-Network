function validform(event) {
  event.preventDefault();

  const username = document.forms["login-form"]["username"].value.trim();
  const password = document.forms["login-form"]["password"].value.trim();

  if (username === "") {
    alert("Please enter proper Username!");
    return false;
  }

  if (password === "") {
    alert("Please enter proper Password!");
    return false;
  }

  alert("Login successful (demo only)");
  return true;
}

window.onload = function () {
  const form = document.forms["login-form"];
  if (form) {
    console.log("Login form found. Event listener attached.");
    form.addEventListener("submit", validform);
  } else {
    console.error("Login form not found!");
  }
};
function gohome() {
  window.location.href = '../home-page.html';
}