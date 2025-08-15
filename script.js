// Ensure the Typed.js library is correctly initialized
var typed = new Typed('#element', {
    strings: ['Programmer.', 'Web Developer.','Tech Enthusiast.'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});


document.addEventListener("DOMContentLoaded", function() {
  // Select all the cards
  const cards = document.querySelectorAll('.card');

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add the 'visible' class when the card is in view
        entry.target.classList.add('visible');

        // Stop observing the current card once it is visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,  // Relative to the viewport
    threshold: 0.5  // Trigger when 50% of the element is visible
  });

  // Start observing each card
  cards.forEach(card => {
    observer.observe(card);
  });
});

document.getElementsByClassName('sendMessage-btn')[0].addEventListener('click',function click() {
  // setTimeout(function ()
  // {
  //   alert("Thank you for contacting");
  // }, 2000);
   alert("Thank you for contacting");
}

);