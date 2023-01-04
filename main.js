// const hr = document.querySelector("#hr");
// const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const deg = 6;

setInterval(() => {
  let day = new Date();
  let ms = day.getMilliseconds() * deg;
  let ss = day.getSeconds() * deg + ms / 1000;

  sc.style.transform = `rotateZ(${ss}deg)`;
});
