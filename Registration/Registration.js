document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const password = document.getElementById("password");
  const meter = document.getElementById("password-strength-meter");
  const strengthText = document.getElementById("strength-text");

  const checkStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  password.addEventListener("input", () => {
    const strength = checkStrength(password.value);
    meter.value = strength;

    const texts = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];
    strengthText.textContent = texts[strength];
    strengthText.style.color = ["red", "orange", "goldenrod", "green", "darkgreen"][strength];
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const passwordVal = password.value.trim();
    const country = document.getElementById("country").value;

    if (!fullname || !email || !passwordVal || !country) {
      alert("Please fill in all required fields.");
      return;
    }

    if (checkStrength(passwordVal) < 2) {
      alert("Please choose a stronger password.");
      return;
    }

    // Simulate saving to storage and redirect
    localStorage.setItem("username", fullname);
    alert("Registration successful!");
    window.location.href = "../home-page.html";
  });
});
