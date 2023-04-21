import handleSideBar from "../sidebar/sidebar.js";
import { get, getAll } from "../utils.js";

// dom
const employerModal = get("#employer-modal");
const allEmployerNavLink = getAll(`[data-name="employer-btn"]`);
const allEmployerSidebarLink = getAll(`[data-name="sidebar-employer-btn"]`);

// variables
const showModal = "employer_modal_open";
const closeModal = "employer_modal_close";

// func
function handleModal() {
  const status = employerModal.dataset.status;
  if (status === "close") {
    employerModal.classList.remove(closeModal);
    employerModal.classList.add(showModal);
    employerModal.dataset.status = "open";
  } else {
    employerModal.classList.remove(showModal);
    employerModal.classList.add(closeModal);
    employerModal.dataset.status = "close";
  }
}

function handleModalFromSidebar() {
  handleSideBar();
  handleModal();
}

// events
allEmployerNavLink.forEach((link) => {
  link.addEventListener("click", handleModal);
});

allEmployerSidebarLink.forEach((link) => {
  link.addEventListener("click", handleModalFromSidebar);
});

employerModal.addEventListener("click", (e) => {
  if (e.target === employerModal) handleModal();
});
