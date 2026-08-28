document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("galleryModal");
  const modalImg = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      modal.classList.add("show");
      document.body.classList.add("modal-open");

      modalImg.src = item.dataset.full;
      modalTitle.textContent = item.dataset.title;
      modalDesc.textContent = item.dataset.desc;
    });
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
      modalImg.src = "";
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.classList.remove("show");
      document.body.classList.remove("modal-open");
    }
  });
});

const footer = document.querySelector(".lace-footer");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.add("show");
    }
  });
}, {
  threshold: 0.01
});

observer.observe(footer);