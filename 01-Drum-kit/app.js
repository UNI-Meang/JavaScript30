const keys = document.querySelectorAll('.key');

const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode - 32}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode - 32}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');
};

function clickSound() {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    this.classList.add('playing');
}

function removeStyle(e) {
    if (e.type !== 'transitioned') return;
    e.target.classList.remove('playing');
}


document.addEventListener('keypress', playSound);
document.addEventListener('transitioned', removeStyle);
keys.forEach((key) => key.addEventListener('click', clickSound));