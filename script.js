const faqs = document.querySelector(".faq");

faqs.forEach((faq) => {
    faq.addEventListner("click", () => {
        toggle.classList.toggle("active");
    })
})