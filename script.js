function convert() {
  // Getting input value from user
  const inputValue = document.getElementById("userInput").value;
  // Getting selected unit from dropdown
  const unit = document.getElementById("unit").value;
  // Checking if conversion is from miles to kilometers
  const milesToKm = (unit === "milesToKm");
  // Initializing result variable
  let result = 0;

  // Performing conversion based on selected unit
  if (milesToKm) {
    // Converting miles to kilometers
    result = inputValue * 1.60934;
  } else {
    // Converting kilometers to miles
    result = inputValue / 1.60934;
  }

  // Displaying the result on the page
  document.getElementById("resultElement").innerHTML = result;
}
