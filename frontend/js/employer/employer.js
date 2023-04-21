import handleSideBar from "../sidebar/sidebar.js";
import { get, getAll } from "../utils.js";

// dom
const employerModal = get("#employer-modal");
const employerForm = get("#employer-form");
const employerFormBtn = get("button", employerForm);
const allEmployerNavLink = getAll(`[data-name="employer-btn"]`);
const allEmployerSidebarLink = getAll(`[data-name="sidebar-employer-btn"]`);

const SuccessModalWrapper = get("#success-modal-wrapper");
const SuccessModal = get("#success-modal");

// variables
const showModal = "employer_modal_open";
const closeModal = "employer_modal_close";

// func
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

  handleModal(SuccessModalWrapper);
  console.log("I was submitted");
});

SuccessModalWrapper.addEventListener("click", (e) => {
  if (e.target === SuccessModalWrapper) {
    handleModal(SuccessModalWrapper);
    console.log("Iw");
  }
});
