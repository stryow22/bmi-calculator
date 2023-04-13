document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  var bmi = weight / (height / 100) ** 2;
  var bmiCategory = "";

  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obesity";
  }

  document.getElementById("result").innerHTML =
    "BMI: " + bmi.toFixed(2) + "<br>Category: " + bmiCategory;
});
