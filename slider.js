// обʼєкт з даними про слайди
let data = {
    1: {
        text: "Перший слайд",
        icon: "cloud",
        property:1,
    },
    2: {
        text: "Другий слайд",
        icon: "book",
        property:2,
    },
    3: {
        text: "Третій слайд",
        icon: "calculator",
        property:3,
    },
    4: {
        text: "Четвертий слайд",
        icon: "building",
        property:4, 
    },
    5: {
        text: "Пʼятий слайд",
        icon: "compass",
        property:5
    },
    6: {
        text:"привіт!",
        icon:"user",
        property:'Anton',

    },
}; // тип даних - обʼєкт

// визначаємо основні змінні
// let - може змінюватись далі
// const - не може змінюватись
let activeSlide = 1; // тип даних - число
const minSlides = 1;
const maxSlides = 6;


// зчитуємо дані про елементи по їхніх айді
const slideText = document.getElementById("slideText");
const slideIcon = document.getElementById("slideIcon");
const slideProperty = document.getElementById("slideProperty"); 

// функція присвоєння слайду, задати дані в HTML
function setSlide() {
    const isValidSlideData = isSlideValid(data[activeSlide]);
    if (isValidSlideData){
        console.log('поточний слайд', data[activeSlide]);
        console.log('поточний номер слайду', activeSlide);
        console.log('данні!',data )
        slideText.innerHTML = data[activeSlide].text;
        slideProperty.innerHTML = data[activeSlide].property;
        slideIcon.classList = [];
        slideIcon.classList.add(data[activeSlide].icon, "icon");
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