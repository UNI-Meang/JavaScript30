const slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIndex = 0,
        slideCount = slide.length,
        slideWidth = 200,
        slideMargin = 30,
        BtnPrev = document.querySelector('.prev'),
        BtnNext = document.querySelector('.next');

    cloneList();

    function cloneList() {
        for(let i = 0; i < slideCount; i++) {
            //node의  ele까지 다 복사해올때 cloneNode사용
            const cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        }
        // index는 length의 -1번째니까, 거꾸로 (5-4-3-2-1) 붙여주기 위해서
        for(let i = slideCount -1; i >= 0; i--) {
            const cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
        totalWidth();
        setInitialPosition();
    }

    //원본 li + clone li 갯수의 합을 구해서 ul의 너비로 지정해주는 함수
    function totalWidth() {
    const currentSlides = document.querySelectorAll('.slides li');
    const newSlideCount = currentSlides.length;

    const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin +'px';
    slides.style.width = newWidth;
    }

    //기본 값으로 보여지는 화면 세팅 (원본 li가 보여지도록 원본의 총 너비 값 만큼 왼쪽으로 이동)
    function setInitialPosition() {
        const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
    }