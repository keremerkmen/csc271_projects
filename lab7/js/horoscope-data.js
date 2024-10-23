let zodiacSign = "Leo";
let birthMonth = "August";
let birthday = 12;
let luckyNumber = 7;
let horoscopeDescription = "Natural-born leader.";
let believeInAstrology = false;

var signElement = document.getElementById('sign');
signElement.innerHTML = zodiacSign;

var birthdayElements = document.getElementsByClassName('birthday'); 
console.log(birthdayElements);
birthdayElements[0].innerHTML = "Birthday: " + birthMonth + " " + birthday + "th";

var luckyNumberElement = document.getElementsByClassName('luckyNum');
console.log(luckyNumberElement);
luckyNumberElement[0].innerHTML = "Lucky Number: " + luckyNumber;

var paragraphElements = document.getElementsByTagName('p');
console.log(paragraphElements);
paragraphElements[0].innerHTML = horoscopeDescription;

paragraphElements[1].innerHTML = "Believe in Astrology: <strong> " + believeInAstrology + "</strong>";


var LeoMoodRating = 4.5;
var CancerMoodRating = 5.0;
var AverageMoodRating = (LeoMoodRating + CancerMoodRating) / 2;
var message = "Today's mood rating for Leo: " + LeoMoodRating + " out of 5. The average mood rating of Leo and Cancer is: " + AverageMoodRating + ".";
console.log(message);
paragraphElements[2].innerHTML = message;

var zodiacSignArray = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
var KeremZodiacSign = zodiacSignArray[4];
var OceaneZodiacSign = zodiacSignArray[3];

var keremMessage = "Kerem's zodiac sign is: " + KeremZodiacSign + ".";
console.log(keremMessage);
paragraphElements[3].innerHTML = keremMessage;

var oceaneMessage = "Oceane's zodiac sign is: " + OceaneZodiacSign + ".";
console.log(oceaneMessage);
paragraphElements[4].innerHTML = oceaneMessage;

var horoscopeDescriptions = [
    "Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals.",
    "Communication is key today. Express yourself clearly and listen to others.",
    "Trust your intuition. It will guide you in making the right decisions.",
    "Your creativity shines today. Use it to inspire and lead others.",
    "Pay attention to the details. Your meticulous work will pay off.",
    "Balance is essential. Find harmony in all aspects of your life.",
    "Embrace transformation. Let go of what no longer serves you.",
    "Adventure awaits. Explore new horizons and expand your horizons.",
    "Hard work leads to success. Keep pushing toward your goals.",
    "Your unique perspective is an asset. Share your ideas with others.",
    "Trust your emotions. They will guide you in making the right choices."
];

horoscopeDescriptions[7] = "Do not be afraid to get dirty -- hard work requires some sweat, but you'll have fun!";

var KeremHoroscopeDescription = horoscopeDescriptions[7];
var OceaneHoroscopeDescription = horoscopeDescriptions[2];

var keremHoroscopeMessage = "Kerem's horoscope: " + KeremHoroscopeDescription;
console.log(keremHoroscopeMessage);
paragraphElements[5].innerHTML = keremHoroscopeMessage;

var oceaneHoroscopeMessage = "Oceane's horoscope: " + OceaneHoroscopeDescription;
console.log(oceaneHoroscopeMessage);
paragraphElements[6].innerHTML = oceaneHoroscopeMessage;