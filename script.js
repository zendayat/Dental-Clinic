var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// const input1 = document.getElementById('input1');
// const input2 = document.getElementById('input2');
// const myLink = document.getElementById('myLink');
// const container = document.getElementById('button');

// input1.addEventListener('input', validateInputs);
// input2.addEventListener('input', validateInputs);
// myLink.setAttribute('disabled', 'disabled');

// function validateInputs() {
//   if (input1.value !== '' && input2.value !== '') {
//     myLink.removeAttribute('disabled');  // Enable the link
//     myLink.setAttribute('href', '#');   // Set the link destination
//     container.style.backgroundColor = 'rgba(59,130,246,0.5)';
//   } else {
//     myLink.setAttribute('disabled', 'disabled');  // Disable the link
//     myLink.removeAttribute('href');   // Remove the link destination
//     container.style.backgroundColor = 'grey'
//   }
// }