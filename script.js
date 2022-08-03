const modal = document.querySelector('#modal');
const contactUs = document.querySelector('.contact-us');
const closeModal = document.querySelector('.close');
const letsTalk = document.querySelector('#lets-talk');
const footerContactLink = document.getElementById('footer-link');

modal.style.display = "none";

contactUs.addEventListener('click', () => {
    modal.style.display = "flex";
})

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

letsTalk.addEventListener('click', () => {
    modal.style.display = "none";
});

footerContactLink.addEventListener('click', () => {
    modal.style.display = "flex";
});


