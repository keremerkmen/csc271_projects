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

    // Horoscope data
    const zodiacSign = "Leo";
    const birthMonth = "August";
    const birthday = 12;
    const luckyNumber = 7;
    const horoscopeDescription = "Natural-born leader.";
    const believeInAstrology = false;

    const signElement = document.getElementById('sign');
    const birthdayElements = document.getElementsByClassName('birthday');
    const luckyNumberElement = document.getElementsByClassName('luckyNum');
    const horoscopeDescriptionElement = document.getElementById('horoscope-description');
    const believeAstrologyElement = document.getElementById('believe-astrology');
    const keremZodiacElement = document.getElementById('kerem-zodiac');
    const keremHoroscopeElement = document.getElementById('kerem-horoscope');

    updateTextContent(signElement, `Zodiac Sign: ${zodiacSign}`);
    if (birthdayElements.length > 0) updateTextContent(birthdayElements[0], `Birthday: ${birthMonth} ${birthday}th`);
    if (luckyNumberElement.length > 0) updateTextContent(luckyNumberElement[0], `Lucky Number: ${luckyNumber}`);
    updateTextContent(horoscopeDescriptionElement, `Horoscope Description: ${horoscopeDescription}`);
    believeAstrologyElement.innerHTML = `Do I believe in astrology? <strong>${believeInAstrology}</strong>`;

    const zodiacSignArray = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    const keremZodiacSign = zodiacSignArray[4];
    const keremMessage = `Kerem's zodiac sign is: ${keremZodiacSign}.`;
    updateTextContent(keremZodiacElement, keremMessage);

    const horoscopeDescriptions = [
        "Today is a day for new beginnings.",
        "Your determination will lead to success.",
        "Communication is key today.",
        "Trust your intuition.",
        "Your creativity shines today.",
        "Pay attention to the details.",
        "Balance is essential.",
        "Adventure awaits.",
        "Hard work leads to success.",
        "Your unique perspective is an asset.",
        "Trust your emotions."
    ];

    const keremHoroscopeDescription = horoscopeDescriptions[7];
    updateTextContent(keremHoroscopeElement, `Kerem's horoscope: ${keremHoroscopeDescription}`);
});
