const textBox = document.querySelectorAll('.text')

const textBoxArray = []
for(let i = 0; i < textBox.length; i++){
    textBoxArray.push(textBox[i])
    textBox[i].style.transform = "perspective(1000px) rotateX(-360deg)"
}

const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime(); 
  const timeRemaining = newYearDate - now; 

  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `${hours} <span>Hours</span> ${minutes} <span>Minutes</span> ${seconds} <span>Seconds</span>`;

  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Happy New Year!";

    textBox[3].style.transform = "perspective(1000px) rotateX(630deg)"
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();