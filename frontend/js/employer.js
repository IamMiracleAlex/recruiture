/* --------------------------------------- */
/*              Dom Helpers                */
/* --------------------------------------- */
function get(name, from = document) {
  if (from.querySelector(name)) return from.querySelector(name);
  throw new Error(`The specified element ${name} was not found`);
}

function getAll(name, from = document) {
  if (from.querySelectorAll(name)) return [...from.querySelectorAll(name)];
  return [];
}

// dom
const sideBar = get(`[data-name="side_bar"]`);
const employerModal = get("#employer-modal");
const employerForm = get("#employer-form");
const allEmployerNavLink = getAll(`[data-name="employer-btn"]`);
const allEmployerSidebarLink = getAll(`[data-name="sidebar-employer-btn"]`);

const SuccessModalWrapper = get("#success-modal-wrapper");
const SuccessModal = get("#success-modal");
const SuccessModalBtn = get("button", SuccessModal);

// variables
const showModal = "employer_modal_open";
const closeModal = "employer_modal_close";

// functions
function handleSideBar() {
  const status = sideBar.dataset.status;
  if (status === "close") {
    sideBar.dataset.status = "open";
    sideBar.classList.add(openSideBar);
    sideBar.classList.remove(closeSideBar);
  } else {
    sideBar.dataset.status = "close";
    sideBar.classList.remove(openSideBar);
    sideBar.classList.add(closeSideBar);
  }
}

function handleModal(modalEl) {
  const status = modalEl.dataset.status;
  if (status === "close") {
    modalEl.classList.remove(closeModal);
    modalEl.classList.add(showModal);
    modalEl.dataset.status = "open";
  } else {
    modalEl.classList.remove(showModal);
    modalEl.classList.add(closeModal);
    modalEl.dataset.status = "close";
  }
}

function handleModalFromSidebar() {
  handleSideBar();
  handleModal(employerModal);
}

function handleShowSuccessModal() {
  handleModal(SuccessModalWrapper);
  SuccessModal.style.transform = "translateY(0px)";
}

function handleCloseSuccessModal() {
  SuccessModal.style.transform = "translateY(200%)";
  setTimeout(() => {
    handleModal(SuccessModalWrapper);
  }, 500);
}

// events
allEmployerNavLink.forEach((link) => {
  link.addEventListener("click", () => handleModal(employerModal));
});

allEmployerSidebarLink.forEach((link) => {
  link.addEventListener("click", handleModalFromSidebar);
});

employerModal.addEventListener("click", (e) => {
  if (e.target === employerModal) handleModal(employerModal);
});

employerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleShowSuccessModal();
});

SuccessModalWrapper.addEventListener("click", (e) => {
  if (e.target === SuccessModalWrapper) {
    handleCloseSuccessModal();
  }
});

SuccessModalBtn.addEventListener("click", () => {
  location.assign("/");
});
