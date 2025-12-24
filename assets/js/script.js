'use strict';

// ===============================
// UTIL
// ===============================
const elementToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

// ===============================
// SIDEBAR
// ===============================
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// ===============================
// TESTIMONIALS (OPCIONAL)
// ===============================
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  if (modalContainer && overlay) {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
};

if (testimonialsItem.length && modalImg && modalTitle && modalText) {
  testimonialsItem.forEach(item => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]")?.src || "";
      modalImg.alt = this.querySelector("[data-testimonials-avatar]")?.alt || "";
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]")?.innerHTML || "";
      modalText.innerHTML = this.querySelector("[data-testimonials-text]")?.innerHTML || "";
      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);

// ===============================
// FILTER / SELECT (PORTFOLIO)
// ===============================
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

if (selectItems.length && selectValue) {
  selectItems.forEach(item => {
    item.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });
}

let lastClickedBtn = filterBtn[0];
if (filterBtn.length && selectValue) {
  filterBtn.forEach(btn => {
    btn.addEventListener("click", function () {
      const selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });
}

// ===============================
// CONTACT FORM
// ===============================
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formInputs.length && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// ===============================
// PAGE NAVIGATION (CLAVE)
// ===============================
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks.length && pages.length) {
  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {

      const target = link.dataset.pageTarget;

      pages.forEach(page => {
        page.classList.remove("active");
        if (page.dataset.page === target) {
          page.classList.add("active");
          window.scrollTo(0, 0);
        }
      });

      navigationLinks.forEach(btn => btn.classList.remove("active"));
      link.classList.add("active");
    });
  });
}
