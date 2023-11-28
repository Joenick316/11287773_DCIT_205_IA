// JavaScript for FAQ hover functionality
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq");

    faqItems.forEach((faq) => {
      faq.addEventListener("mouseenter", () => {
        const answer = faq.querySelector(".answer");
        answer.style.display = "block";
      });

      faq.addEventListener("mouseleave", () => {
        const answer = faq.querySelector(".answer");
        answer.style.display = "none";
      });
    });
  });