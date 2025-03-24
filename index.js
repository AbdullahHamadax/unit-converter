const convertBtn = document.getElementById("convert-btn");
const userInput = document.getElementById("user-input");

const metersText = document.getElementById("meters-text");
const litersText = document.getElementById("liters-text");
const kilosText = document.getElementById("kilos-text");

document.addEventListener("DOMContentLoaded", function () {
  let storedValue = JSON.parse(localStorage.getItem("userInput"));
  storedValue = parseFloat(storedValue);
  if (storedValue) {
    userInput.value = storedValue;
    convertUserInput(storedValue);
  }
});

convertBtn.addEventListener("click", function () {
  let userValue = userInput.value;
  userValue = parseFloat(userValue);

  if (!userValue || userValue <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  localStorage.setItem("userInput", JSON.stringify(userValue));

  convertUserInput(userValue);
});

function getLength(userValue) {
  const meters = (userValue * 3.281).toFixed(3);
  metersText.textContent = `${userValue} meters = ${meters} feet | ${userValue} feet = ${(
    userValue / 3.281
  ).toFixed(3)} meters`;
}

function getVolume(userValue) {
  const liters = (userValue * 0.264).toFixed(3);
  litersText.textContent = `${userValue} liters = ${liters} gallons | ${userValue} gallons = ${(
    userValue / 0.264
  ).toFixed(3)} liters`;
}

function getMass(userValue) {
  const kilos = (userValue * 2.204).toFixed(3);
  kilosText.textContent = `${userValue} kilos = ${kilos} pounds | ${userValue} pounds = ${(
    userValue / 2.204
  ).toFixed(3)} kilos`;
}

function convertUserInput(userValue) {
  getLength(userValue);
  getVolume(userValue);
  getMass(userValue);
}
