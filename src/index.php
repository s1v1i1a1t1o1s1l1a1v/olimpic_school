<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Document</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Слайдер</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
    <link rel="stylesheet" href="styles/index.css">
    <link rel="stylesheet" href="styles/slider.css">
</head>
<body>
    <header class="main-header"></header>
    <div class="ui container">
        <h1>Automobile UA</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis dolorem officia ipsam asperiores
            voluptate minus dicta, accusantium ea. Vitae, qui odio corporis laboriosam velit beatae consequatur dolorum
            veritatis delectus.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reiciendis dolorem officia ipsam asperiores
            voluptate minus dicta, accusantium ea. Vitae, qui odio corporis laboriosam velit beatae consequatur dolorum
            veritatis delectus.
        </p>
        <ul>
            <li><span>Koenigsegg AG</span></li>
            <li><span>Opel Insignia</span></li>
            <li><span>Honda Motor Bikes</span></li>
            <li><span>BMW</span></li>
            <li><span>Mercedes Benz Sprinter 316 CDI 2018</span></li>
            <li><span>Audi</span></li>
        </ul>
    </div>
    <!-- <?php echo phpinfo()?> -->
    <!--start slider-->
    <div class="slider ui container">
        <div class="ui basic segment">
            <h1 class="ui header">Слайдер</h1>
            <div class="ui segment">
                <button
                    class="ui labeled icon button"
                    onclick="onPrevClick()"
                >
                    <i class="left arrow icon"></i>
                    Попередній слайд
                </button>
                <div class="ui segment raised">
                    <!-- тут будемо присвоювати дані слайду -->
                    <div class="slider-image">
                        <img src="assets/honda_cb_1000_r.jpg" alt="Honda" class="icon" id="slideImage">
                    </div>
                    <div id="slideText"></div>
                </div>
                <button
                    class="ui right labeled icon button"
                    onclick="onNextClick()"
                >
                    <i class="right arrow icon"></i>
                    Наступний слайд
                </button>
            </div>
            <div>
                <button
                    class="ui right labeled icon button operational"
                    id="invalidSlide"
                >
                    Обманути програму
                </button>
                <br>
                <button
                    class="ui right labeled icon button operational"
                    id="realInvalidSlide"
                >
                    Збити програму
                </button>
                <br>
                <button
                    class="ui right labeled icon button operational"
                    id="randomSlide"
                >
                    Додати слайд
                </button>
            </div>
        </div>
    </div>
    <!--end-->
    <footer class="footer main-footer">
        Copyright 2023
    </footer>
    <script type="module" src="scripts/slides.js"></script>
</body>
</html>
