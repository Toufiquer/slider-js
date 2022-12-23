const allImageURL = ["img/bg-1.jpg", "img/bg-2.jpg", "img/bg-3.jpg", "img/bg-4.jpg", "img/bg-5.jpg"];
let i = 0;
let j = 0;
const text = document.getElementById("text");
const image = document.getElementById("image");
const iid = setInterval(() => {
  if (i > 4) {
    i = 0;
  }
  text.innerText = i + 1;
  image.src = allImageURL[i];
  if (j === 100) {
    clearInterval(iid);
  }
  i++;
  ++j;
}, 2000);
