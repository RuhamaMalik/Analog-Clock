function rotateClockHands() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
console.log(now.getMinutes())
  const hourHand = document.querySelector(".hour-hand");
  const minuteHand = document.querySelector(".minute-hand");
  const secondHand = document.querySelector(".second-hand");

  const hourRotation = (hours % 12 + minutes / 60) * 30;
  const minuteRotation = (minutes + seconds / 60) * 6;
  const secondRotation = seconds * 6;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000); // Update every second
