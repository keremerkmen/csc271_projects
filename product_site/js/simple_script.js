document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to the "Calculate BMI" button
    const calculateButton = document.getElementById('calculateBtn');
    if (calculateButton) {
        calculateButton.addEventListener('click', function () {
            // Get the values of weight and height
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);

            // Validate the input values
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                document.getElementById('result').textContent = "Please enter valid positive numbers for weight and height.";
                return;
            }

            // Calculate the BMI and determine the category
            const bmi = calculateBMI(weight, height);
            const category = getBMICategory(bmi);

            // Display the result
            document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
        });
    }

    // Function to calculate BMI
    function calculateBMI(weight, height) {
        return weight / (height * height);
    }

    // Function to determine the BMI category
    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else {
            return 'Overweight';
        }
    }

    // Variables to store horoscope data
    const zodiacSign = "Leo";
    const birthMonth = "August";
    const birthday = 12;
    const luckyNumber = 7;
    const horoscopeDescription = "Natural-born leader.";
    const believeInAstrology = false;

    // Select elements using DOM methods
    const signElement = document.getElementById('sign');
    const birthdayElements = document.getElementsByClassName('birthday');
    const luckyNumberElement = document.getElementsByClassName('luckyNum');
    const horoscopeDescriptionElement = document.getElementById('horoscope-description');
    const believeAstrologyElement = document.getElementById('believe-astrology');
    const keremZodiacElement = document.getElementById('kerem-zodiac');
    const keremHoroscopeElement = document.getElementById('kerem-horoscope');

    // Update the content of selected elements if they exist
    if (signElement) signElement.textContent = `Zodiac Sign: ${zodiacSign}`;
    if (birthdayElements.length > 0) birthdayElements[0].textContent = `Birthday: ${birthMonth} ${birthday}th`;
    if (luckyNumberElement.length > 0) luckyNumberElement[0].textContent = `Lucky Number: ${luckyNumber}`;
    if (horoscopeDescriptionElement) horoscopeDescriptionElement.textContent = `Horoscope Description: ${horoscopeDescription}`;
    if (believeAstrologyElement) believeAstrologyElement.innerHTML = `Do I believe in astrology? <strong>${believeInAstrology}</strong>`;

    // Array for zodiac signs
    const zodiacSignArray = [
        "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
        "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
    ];
    const keremZodiacSign = zodiacSignArray[4];

    // Display Kerem's zodiac sign
    const keremMessage = `Kerem's zodiac sign is: ${keremZodiacSign}.`;
    console.log(keremMessage);
    if (keremZodiacElement) keremZodiacElement.textContent = keremMessage;

    // Horoscope descriptions array
    const horoscopeDescriptions = [
        "Today is a day for new beginnings. Embrace change and seize opportunities.",
        "Your determination will lead to success today. Stay focused on your goals.",
        "Communication is key today. Express yourself clearly and listen to others.",
        "Trust your intuition. It will guide you in making the right decisions.",
        "Your creativity shines today. Use it to inspire and lead others.",
        "Pay attention to the details. Your meticulous work will pay off.",
        "Balance is essential. Find harmony in all aspects of your life.",
        "Do not be afraid to get dirty -- hard work requires some sweat, but you'll have fun!",
        "Adventure awaits. Explore new horizons and expand your horizons.",
        "Hard work leads to success. Keep pushing toward your goals.",
        "Your unique perspective is an asset. Share your ideas with others.",
        "Trust your emotions. They will guide you in making the right choices."
    ];

    const keremHoroscopeDescription = horoscopeDescriptions[7];
    const keremHoroscopeMessage = `Kerem's horoscope: ${keremHoroscopeDescription}`;
    console.log(keremHoroscopeMessage);
    if (keremHoroscopeElement) keremHoroscopeElement.textContent = keremHoroscopeMessage;
});