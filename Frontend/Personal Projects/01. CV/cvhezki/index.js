const img = document.querySelector("img");
let curr = 1;
img.addEventListener("click", () => {
  if (curr == 1) {
    curr = 2;
    img.src = "./public/img/portrait1.jpeg";
  } else {
    curr = 1;
    img.src = "./public/img/portrait.jpg";
  }
});
