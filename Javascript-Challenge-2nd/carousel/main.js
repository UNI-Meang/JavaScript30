const slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        slideCount = slide.length,
        slideWidth = 200,
        slideMargin = 30,
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');

    let currentIndex = 0;

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
        //원본 li값이 중앙으로 위치한 뒤에 animated 함수 실행 (li들이 이동하는 걸 숨기는 기능)
        setTimeout(function(){
            slides.classList.add('animated');
        }, 100);
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
    
    //이동 btn 이벤트 추가
    prevBtn.addEventListener('click', function(){
        moveSlide(currentIndex - 1);
    });
    nextBtn.addEventListener('click', function(){
        moveSlide(currentIndex + 1);
    });

    function moveSlide(num){
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIndex = num;
        // clickCount(slideCount)누를 때 마다의 현재 list의 index 확인해보기 => 마지막 index의 경우 빈 화면 출력
        // console.log(currentIndex, slideCount);
        // next btn의 endpoint의 값이((마지막 인덱스) 클릭한 수와 일치하면 (총 인덱스 5개, 클릭 5번)
        //이 때, user몰래 li를 다시 원본으로 돌려준다. 
        if(currentIndex == slideCount || currentIndex == -slideCount) {
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIndex = 0;
            }, 500);
            setTimeout(function(){
                slides.classList.add('animated');
            }, 600);
        }
    }