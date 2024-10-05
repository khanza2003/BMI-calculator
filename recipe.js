document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    let weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Please enter valid numbers!";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);

    let resultText = `Your BMI is ${bmi}. `;

    if (bmi < 18.5) {
        resultText += "You are underweight.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "You are overweight.";
    } else {
        resultText += "You are obese.";
    }

    document.getElementById('result').innerText = resultText;
});