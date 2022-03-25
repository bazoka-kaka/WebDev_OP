let image = document.querySelector(".portrait-img");
let button = document.querySelector(".btn");
let currImage = "portrait-0";
console.log(image.src);

button.addEventListener("click", () => {
  if (currImage == "portrait-0") {
    currImage = "portrait-1";
    image.src = "public/portrait-1.jpeg";
  } else {
    currImage = "portrait-0";
    image.src = "public/portrait-0.jpg";
  }
  console.log(image.src);
});
