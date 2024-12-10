document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateBtn');
    if (calculateButton) {
        calculateButton.addEventListener('click', function () {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                updateTextContent(document.getElementById('result'), 'Please enter valid positive numbers for weight and height.');
                return;
            }

            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);

            updateTextContent(document.getElementById('result'), `Your BMI is ${bmi.toFixed(2)} (${category})`);
        });
    }

    // Helper functions
    function updateTextContent(element, text) {
        if (element) element.textContent = text;
    }

    // Calculate BMI
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    // Determine BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else {
            return 'Overweight';
        }
    }
});
