const allImageURL = ["img/bg-1.jpg", "img/bg-2.jpg", "img/bg-3.jpg", "img/bg-4.jpg", "img/bg-5.jpg"];
let i = 0;
let j = 0;
const iid = setInterval(() => {
  i++;
  ++j;
  if (i > 4) {
    i = 0;
  }
  const image = document.getElementById("image");
  document.getElementById("text").innerText = i + 1;
  image.src = allImageURL[i];
  if (j === 100) {
    clearInterval(iid);
  }
}, 2000);
