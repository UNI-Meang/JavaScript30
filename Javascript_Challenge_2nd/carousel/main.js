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
    }