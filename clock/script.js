const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setdate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  //////
  const min = now.getMinutes();
  const minDeg = (min / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  //////
  const hour = now.getMinutes();
  const HrDeg = (hour / 60) * 360 + 90;
  minHand.style.transform = `rotate(${HrDeg}deg)`;
}
setInterval(setdate, 1000);
