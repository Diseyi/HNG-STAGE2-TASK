
const userName = document.querySelector(".name");
const form = document.querySelector(".form");
const input = document.getElementById("get-username");
const myName = document.querySelector(".myname");


form.addEventListener("submit", (e) => {
    e.preventDefault();
const storeName = input.value;

userName.textContent = storeName;
myName.style.display = "block"
input.value = "";
})


