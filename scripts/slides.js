// обʼєкт з даними про слайди
const mercedes = [
    {
        src:"assets/w140.jpg", 
    }, 
]
const randomIcon = [
    "share",
    "retweet",
    "upload",
    "reply",
    "play",
    "sort",
];
// тип даних - масив
const data = [
    {
        name: "honda",
        src: "assets/honda_cb_1000_r.jpg",
        text: "Перший слайд",
        icon: "cloud",
    },    
    {
        name: "bmw",
        src: "assets/bmw_z4.jpg",  
        text: "Другий слайд",
        icon: "book",
    },
    {
        src: "assets/koenigsegg.jpg",
        name: "koenigsegg",
        text: "Третій слайд",
        icon: "calculator",
    },
    {
        name: "mercedes", 
        src:"assets/mercedes_c_220.jpg",
        text: "Четвертий слайд",
        icon: "building",
    },
    {
        name: "opel", 
        src: "assets/opel_insignia.jpg", 
        text: "Пʼятий слайд",
        icon: "compass",
    },
];
// визначаємо основні змінні
// let - може змінюватись далі
// const - не може змінюватись
let activeSlide = 0; // тип даних - число
const minSlides = 0;
let maxSlides = data.length - 1;
// зчитуємо дані про елементи по їхніх айді
const slideText = document.getElementById("slideText");
const slideImage = document.getElementById("slideImage");
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
    maxSlides = data.length - 1;
    setSlide();
})
function getRandomInt(max) {
    let randomIndex = Math.floor(Math.random() * max);
    return randomIndex;
}
// функція присвоєння слайду, задати дані в HTML
function setSlide(kurva) {
    try {
        const activeSlideData = data[activeSlide]; 
        const isValidSlideData = isSlideValid(activeSlideData)
        if (isValidSlideData) {
            console.log('поточний слайд', activeSlideData);
            console.log('поточний номер слайду', activeSlide);
            slideText.innerHTML = activeSlideData.text;
            slideImage.src = activeSlideData.src; 
        } else {
            throw new Error("Дані передані  функцію слайдера недійсні")
            slideImage.src = mercedes[0].src; 
        }
    } catch(err) {
        slideText.innerText =  "stalas pomulka";
        slideIcon.classList = [];
        slideIcon.classList.add("cut", "icon");
        console.error("setSlide function error: ", err);

        slideText.innerHTML = "збита програма!";
        slideImage.src = mercedes[0].src; 
    }
}
// функція перевірки чи є дані слайду, має вхідний параметр і повертає результат
function isSlideValid(payload) {
    return Boolean(payload && payload.text);
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
