const fortunes = [
    "Today, you will find peace in small moments.",
    "A warm encounter will brighten your path.",
    "Trust your intuition; it will guide you today.",
    "A quiet success is on the horizon for you.",
    "Joy will find you in unexpected places today.",
    "A gentle shift will bring you clarity.",
    "Someone appreciates your kindness today.",
    "Rest will bring you the strength you need.",
    "Your heart will feel lighter by day's end.",
    "An old wish will come closer to fulfillment."
];

// Zodiac calculation
document.getElementById('get-zodiac-btn').addEventListener('click', () => {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your date of birth.');
        return;
    }
    const zodiac = getZodiacSign(new Date(dob));
    const zodiacDisplay = document.getElementById('zodiac-display');
    zodiacDisplay.style.opacity = 0;
    setTimeout(() => {
        zodiacDisplay.innerText = `✨ Oh! You are a ${zodiac}! ✨`;
        zodiacDisplay.style.opacity = 1;
        document.getElementById('get-fortune-btn').style.display = 'inline-block';
    }, 300);
});

function getZodiacSign(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
    if((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
}

// Reveal fortune
document.getElementById('get-fortune-btn').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortuneBox = document.getElementById('fortune-box');
    fortuneBox.style.opacity = 0;
    setTimeout(() => {
        fortuneBox.innerText = fortunes[randomIndex];
        fortuneBox.style.opacity = 1;
        document.getElementById('fortune-container').style.display = 'flex';
        window.scrollTo({
            top: document.querySelector('.fortune-section').offsetTop,
            behavior: 'smooth'
        });
    }, 300);
});

// Color buttons with consistent styles
document.getElementById('btn1').addEventListener('click', () => {
    applyStyles('#561656d4', '#808080', '#FFFFFF', '20px', 'Times New Roman');
});
document.getElementById('btn2').addEventListener('click', () => {
    applyStyles('#4107a5', '#FFDAB9', '#FFFFFF', '20px', 'Georgia');
});
document.getElementById('btn3').addEventListener('click', () => {
    applyStyles('#e2f016', '#00FFFF', '#000000', '20px', 'Courier New');
});
document.getElementById('btn4').addEventListener('click', () => {
    applyStyles('#dc2413b7', '#F0E68C', '#FFFFFF', '20px', 'Verdana');
});

function applyStyles(bgColor, borderColor, fontColor, fontSize, fontFamily) {
    const box = document.getElementById('fortune-box');
    box.style.backgroundColor = bgColor;
    box.style.borderColor = borderColor;
    box.style.color = fontColor;
    box.style.fontSize = fontSize;
    box.style.fontFamily = fontFamily;
}
