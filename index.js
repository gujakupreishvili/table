const hat_p = document.querySelectorAll(".hat-p");
const category = document.querySelectorAll(".category");
const ids = document.querySelectorAll(".id");
const img = document.querySelectorAll(".img");
const prices = document.querySelectorAll(".prices");
const rate = document.querySelector(".rate-td");
const next_page = document.querySelector(".next-page");
const trash = document.querySelector(".trash");
const tr = document.getElementsByTagName("tr")[0];

fetch(`https://fakestoreapi.com/products`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element, index) => {
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
    for (let remove = 0; remove < data.length; remove++) {
      trash[remove].addEventListener("click", () => {
        tr[remove].style.display = "none";
      });
    }
  });

next_page.addEventListener("click", () => {
  document.body.style.display = "none";
  window.location.href = "secondPage.html";
});

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  document.body.style.display = "none";
  window.location.href = "secondPage.html";
});

const darkmode_toggle = document.getElementById("darkmode-toggle");
darkmode_toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
