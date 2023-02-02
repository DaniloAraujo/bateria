document.body.addEventListener('keyup', pressKey);
document.querySelector('.composer button').addEventListener('click', composition);

function composition() {
    let song = document.querySelector('#input').value;
    let songArray = song.split(''); //transformando a string em array
    playComposition(songArray);
}

function pressKey(e) {
    playSound(e.code.toLowerCase());
};

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`);

    if (audioElement) {
        audioElement.currentTime = 0; //zera o tempo do audio, se apertar novamente, ele cancela e toca de novo
        audioElement.play();
    };

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    };
};

function playComposition(songArray) {
    let wait = 0;

    songArray.map((songItem) => {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250; //tempo de espera para cada som, e vai aumentando de 250 em 250
    });
};