'use strict';

// ===============================
// CARGA DE PARTIALS
// ===============================
async function loadHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`No se pudo cargar: ${url}`);

  el.innerHTML = await res.text();
}

async function loadPages() {
  const pagesRoot = document.querySelector("#pages-root");
  if (!pagesRoot) return;

  const pages = ["about", "resume", "portfolio", "contact"];

  const htmlChunks = await Promise.all(
    pages.map(async (p) => {
      const url = `./partials/pages/${p}.html`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`No se pudo cargar: ${url} (HTTP ${res.status})`);
      }

      return await res.text();
    })
  );

  pagesRoot.innerHTML = htmlChunks.join("\n");
}

// ===============================
// INICIALIZACIÓN DE TU UI
// ===============================
function initUI() {

  // UTIL
  const elementToggleFunc = function (elem) {
    if (elem) elem.classList.toggle("active");
  };

  const normalize = (str) => (str || "").trim().toLowerCase();

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
  const selectValue = document.querySelector("[data-select-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter-item]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }

  const filterFunc = function (selectedValue) {
    const selected = normalize(selectedValue);

    filterItems.forEach(item => {
      const category = normalize(item.dataset.category);

      if (selected === "all" || category === selected) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // ✅ SELECT (dropdown) -> usa data-filter, NO innerText
  if (selectItems.length) {
    selectItems.forEach(item => {
      item.addEventListener("click", function () {
        const selectedValue = this.dataset.filter || "all";

        if (selectValue) {
          selectValue.innerText = this.innerText;
        }

        elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    });
  }

  // ✅ BOTONES (arriba) -> usa data-filter, NO innerText
  let lastClickedBtn = filterBtn[0] || null;

  if (filterBtn.length) {
    filterBtn.forEach(btn => {
      btn.addEventListener("click", function () {
        const selectedValue = this.dataset.filter || "all";

        if (selectValue) {
          selectValue.innerText = this.innerText;
        }

        filterFunc(selectedValue);

        if (lastClickedBtn) lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    });
  }

  // ✅ Estado inicial del portafolio (por si entra y no ha clickeado nada)
  // Si existe un botón activo, filtra con ese; si no, muestra todo.
  const defaultFilter = document.querySelector("[data-filter-btn].active")?.dataset.filter || "all";
  filterFunc(defaultFilter);

  // ===============================
  // CONTACT FORM
  // ===============================
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formInputs.length && formBtn) {
    const check = () => {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    };

    formInputs.forEach(input => input.addEventListener("input", check));
    check();
  }

  // ===============================
  // PAGE NAVIGATION
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
}

// ===============================
// BOOTSTRAP (orden correcto)
// ===============================
(async function bootstrap() {
  try {
    await loadHTML("#sidebar-root", "./partials/layout/sidebar.html");
    await loadHTML("#navbar-root", "./partials/layout/navbar.html");
    await loadPages();

    initUI(); // IMPORTANTE: después de cargar HTML
  } catch (err) {
    console.error(err);
  }
})();
