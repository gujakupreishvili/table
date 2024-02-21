const previous = document.querySelector(".previous");
previous.addEventListener("click", () => {
  document.body.style.display = "none";
  window.location.href = "index.html";
});

const first_page = document.querySelector(".first-page");
first_page.addEventListener("click", () => {
  document.body.style.display = "none";
  window.location.href = "index.html";
});
const hat_p = document.querySelectorAll(".hat-p");
const category = document.querySelectorAll(".category");
const ids = document.querySelectorAll(".id");
const img = document.querySelectorAll(".img");
const prices = document.querySelectorAll(".prices");
const rate = document.querySelector(".rate-td");

fetch(`https://fakestoreapi.com/products`)
  .then((response) => response.json())
  .then((data) => {
    data.slice(10, 20).forEach((element, index) => {
      console.log(element);
      if (ids[index]) {
        ids[index].textContent = `#${element.id}`;
      }
      if (hat_p[index]) {
        hat_p[index].textContent = element.title;
        hat_p[index].style.width = "200px";
        hat_p[index].style.padding = "25px";
      }
      if (category[index]) {
        category[index].textContent = element.category;
      }
      if (img[index]) {
        img[index].src = element.image;
      }
      if (prices[index]) {
        prices[index].textContent = `$ ${element.price}`;
      }
      if (rate[index]) {
        console.log(rate);
        rate[index].textContent = `${element.rating.rate}`;
      }
    });
  });

const darkmode_toggle = document.getElementById("darkmode-toggle");
darkmode_toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
