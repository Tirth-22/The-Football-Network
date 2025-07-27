function toggleFAQ() {
  const faq = document.getElementById("faqs-container");
  faq.style.display = faq.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faqs-que").forEach(button => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});
