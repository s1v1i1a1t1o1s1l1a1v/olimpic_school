// обʼєкт з даними про слайди

let randomIcon = [
    "share",
    "retweet",
    "upload",
    "reply",
    "play",
    "sort"
];

let data = [
    {
        text: "Перший слайд",
        icon: "cloud",
    },
    {
        text: "Другий слайд",
        icon: "book",
    },
    {
        text: "Третій слайд",
        icon: "calculator",
    },
    {
        text: "Четвертий слайд",
        icon: "building",
    },
    {
        text: "Пʼятий слайд",
        icon: "compass",
    }
];// тип даних - масив

// визначаємо основні змінні
// let - може змінюватись далі
// const - не може змінюватись
let activeSlide = 0; // тип даних - число
const minSlides = 0;
let maxSlides = data.length - 1;

// зчитуємо дані про елементи по їхніх айді
const slideText = document.getElementById("slideText");
const slideIcon = document.getElementById("slideIcon");

const invalidSlide = document.getElementById('invalidSlide');
const realInvalidSlider = document.getElementById('realInvalidSlide');
const randomSlider = document.getElementById('randomSlide');

invalidSlide.addEventListener('click', function () {
    data[activeSlide - 1] = "I am not a valide slide but I will pass";
    setSlide();
})

realInvalidSlider.addEventListener('click', function () {
    
    data[activeSlide + 1] = "";
    setSlide();
})

randomSlider.addEventListener('click', function () {
    data.push({
        text: "Доданий слайд",
        icon: randomIcon[getRandomInt(randomIcon.length)]
    });
    maxSlides = data.length-1;
    setSlide();
})

function getRandomInt(max) {
    let randomIndex = Math.floor(Math.random() * max);
    return randomIndex;
}

// функція присвоєння слайду, задати дані в HTML
function setSlide() {
    const isValidSlideData = isSlideValid(data[activeSlide]);
    if (isValidSlideData) {
        console.log('поточний слайд', data[activeSlide]);
        console.log('поточний номер слайду', activeSlide);
        slideText.innerHTML = data[activeSlide].text;
        slideIcon.classList = [];
        slideIcon.classList.add(data[activeSlide].icon, "icon");
    } else {
        throw new Error("Дані передані у функцію слайдера недійсні")
    }
}

// функція перевірки чи є дані слайду, має вхідний параметр і повертає результат
function isSlideValid(payload) {
    const isValid = !!payload;
    return isValid;
}

// функція коли нажимаємо на попередній слайд
// в HTML визначено як onclick="onPrevClick()"
const onPrevClick = () => {
    activeSlide = activeSlide - 1;
    if (activeSlide < minSlides) {
        activeSlide = maxSlides;
    }
    setSlide();
};

// функція коли нажимаємо на наступний слайд
// в HTML визначено як onclick="onNextClick()"
const onNextClick = () => {
    activeSlide = activeSlide + 1;
    if (activeSlide > maxSlides) {
        activeSlide = minSlides;
    }
    setSlide();
};

// виконується ця функція коли оновлюємо сторінку, вона нам присвоює перший слайд
setSlide();

window.onNextClick = onNextClick;
window.onPrevClick = onPrevClick;