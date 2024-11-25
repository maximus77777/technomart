const link = document.querySelector(".btn-info-contacts");
const modalForm = document.querySelector(".popup-form");
const linkCart = document.querySelectorAll(".btn-pay");
const formWindow = modalForm.querySelector("form");
const login = modalForm.querySelector("[name=login]");
const email = modalForm.querySelector("[name=e-mail]");
const linkMap = document.querySelector(".link-button");
const modalMap = document.querySelector(".popup_map");
const closeLink = document.querySelectorAll(".close-show");
const slider_1 = document.querySelectorAll(".slide");
const arrowButton = document.querySelectorAll(".btn-arrow");
const numberButton = document.querySelectorAll(".btn-number");
const sliderServices = document.querySelectorAll(".slide-services");
const serviceButton = document.querySelectorAll(".btn-services");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("date");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalForm.classList.add("modal-show");

    if (login.value) {
      email.focus();
    } else {
      login.focus();
    };
});

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

for (let i = 0; i < closeLink.length; i++) {
  closeLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
      modalMap.classList.remove("modal-show");
      modalForm.classList.remove("modal-show");
      modalForm.classList.remove("modal-error");
  });
}

formWindow.addEventListener("submit", function(evt)  {
  evt.preventDefault();
  if (!login.value || !email.value) {
    modalForm.classList.remove("modal-error");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add("modal-error");
  } else
  if (isStorageSupport) {
  localStorage.setItem("date", login.value);
  localStorage.setItem("date", email.value);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if(modalForm.classList.contains("modal-show")) {
      modalForm.classList.remove("modal-show");
      modalForm.classList.remove("modal-error");
    }
    modalMap.classList.remove("modal-show");
  }
});

for (let s = 0; s < arrowButton.length; s++) {
  console.log(arrowButton[s]);
  arrowButton[s].addEventListener("click", function(evt)  {
    evt.preventDefault();
    for (let n = 0; n < slider_1.length; n++) {
      slider_1[n].classList.remove("slide-active");
      numberButton[n].classList.remove("btn-active");
    };
    let p = 1;
    if (arrowButton[s] === arrowButton[0] && p > 0 ) {
      p--;
    }

    if (arrowButton[s] === arrowButton[1] && p < slider_1.length-1) {
      p++;
    }
    slider_1[p].classList.add("slide-active");
    numberButton[p].classList.add("btn-active");
  });
}

for (let j = 0; j < numberButton.length; j++) {
  numberButton[j].addEventListener("click", function(evt)  {
    evt.preventDefault();
    for (let n = 0; n < slider_1.length; n++) {
      slider_1[n].classList.remove("slide-active");
      numberButton[n].classList.remove("btn-active");
    }
    slider_1[j].classList.add("slide-active");
    numberButton[j].classList.add("btn-active");
  });
  }

for (let d = 0; d < serviceButton.length; d++) {
  serviceButton[d].addEventListener("click", function(evt)  {
    evt.preventDefault();
    for (let z = 0; z < serviceButton.length; z++) {
      sliderServices[z].classList.remove("slide-services-active");
      serviceButton[z].classList.remove("btn-services-active");
    }
    sliderServices[d].classList.add("slide-services-active");
    serviceButton[d].classList.add("btn-services-active");
  });
}
