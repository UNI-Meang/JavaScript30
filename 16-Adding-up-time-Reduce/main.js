const reduced_span = document.querySelector('.reduced');

const displayTimes = () => {
    const timeData_li = Array.from(document.querySelectorAll('.videos li'));

    timeData_li.map((li) => {
        const display_span = li.querySelector('.display');
        display_span.innerHTML = li.dataset.time;
    });

    calculateTotalTime();
};

const calculateTotalTime = () => {
    const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

    const totalSeconds = timeNodes
        .map((node) => node.dataset.time)
        .map((timeCode) => {
            const [mins, secs] = timeCode.split(':').map(parseFloat);
            return mins * 60 + secs;
        })
        .reduce((total, seconds) => total + seconds);

    let secondsLeft = totalSeconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft %= 3600;

    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft %= 60;

    console.log(hours, minutes, secondsLeft);

    reduced_span.innerHTML = `${hours}:${minutes}:${secondsLeft}`;
};

displayTimes();