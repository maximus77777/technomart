const link = document.querySelector(".btn-info-contacts");
const modal = document.querySelector(".popup");
const linkMap = document.querySelector(".link-button");
const modalMap = document.querySelector(".popup_map");
const closeLink = document.querySelectorAll(".close-show");
// const form = modal.querySelector("form");
// const dateTo = modal.querySelector("[name=date-to]");
// const dateFrom = modal.querySelector("[name=date-from]");

// let isStorageSupport = true;
// let storage = "";

// try {
//   storage = localStorage.getItem("date");
// } catch (err) {
//   isStorageSupport = false;
// }

console.log(closeLink);

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (modal.classList.contains("modal-show")) {
    modal.classList.remove("modal-show");
  } else {
    modal.classList.add("modal-show");
  }
});

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("popup-show");
});

closeLink[0].addEventListener("click", function(evt) {
  evt.preventDefault();
    modalMap.classList.remove("popup-show");
});

closeLink[1].addEventListener("click", function(evt) {
  evt.preventDefault();
    modal.classList.remove("modal-show");
});

// form.addEventListener("submit", function(evt)  {
//   evt.preventDefault();
//   if (!dateTo.value || !dateFrom.value) {
//     modal.classList.remove("modal-error");
//     modal.offsetWidth = modal.offsetWidth;
//     modal.classList.add("modal-error");
//   } else
//   if (isStorageSupport) {
//   localStorage.setItem("date", dateTo.value);
//   localStorage.setItem("date", dateFrom.value);
//   }
// });

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if(modal.classList.contains("modal-show")) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
      // popup.classList.remove("modal-error");
    }
  }
});
