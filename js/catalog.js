const linkCart = document.querySelectorAll(".btn-pay");
const modalCart = document.querySelector(".popup-cart");
const closeLink = document.querySelector(".close-show");

for(let i = 0; i < linkCart.length; i++){
  linkCart[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.add("modal-show");
  });
};
  closeLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalCart.classList.remove("modal-show");
  });
