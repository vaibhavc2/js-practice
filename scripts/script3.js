const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let intervalRef = null;
const startInterval = () => {
  const sayDateAndName = (myName) => {
    console.log(Date.now(), myName);
  };

  intervalRef === null &&
    (intervalRef = setInterval(sayDateAndName, 1000, "Vaibhav Chopra"));
};

const stopInterval = () => {
  clearInterval(intervalRef);
  intervalRef = null;
};

startButton.onclick = (e) => {
  e.preventDefault();
  startInterval();
};

stopButton.onclick = (e) => {
  e.preventDefault();
  stopInterval();
};
