const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const carousel = document.querySelector(".movie-items");
const items = document.querySelectorAll(".item");
const itemsToShow = 4;
const gap = 22;
const cardWidth = items[0].offsetWidth + gap;

const accordionItems = document.querySelectorAll('.accordion input[type="checkbox"]');

const updateButtonVisibility = () => {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  // Toggle 'visible' class for smooth transitions
  if (carousel.scrollLeft <= 0) {
    prev.classList.remove("visible");
  } else {
    prev.classList.add("visible");
  }

  if (carousel.scrollLeft >= maxScrollLeft - 1) {
    next.classList.remove("visible");
  } else {
    next.classList.add("visible");
  }
};

// Scroll Next
nextBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: cardWidth * itemsToShow,
    behavior: "smooth",
  });
});

// Scroll Previous
prevBtn.addEventListener("click", () => {
  carousel.scrollBy({
    left: -cardWidth * itemsToShow,
    behavior: "smooth",
  });
});

// Update visibility on scroll
carousel.addEventListener("scroll", updateButtonVisibility);

// Initial visibility check
window.addEventListener("load", updateButtonVisibility);

accordionItems.forEach((item) => {
  item.addEventListener("change", function () {
    if (this.checked) {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== this) {
          otherItem.checked = false;
        }
      });
    }
  });
});
