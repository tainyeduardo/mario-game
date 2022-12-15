const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');
const cloud1 = document.querySelector('.cloud1');
const cloud2 = document.querySelector('.cloud2');
const over = document.querySelector('.over');



const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
const pipePosition = pipe.offsetLeft

const loop = setInterval(() => {


    const pipePosition = pipe.offsetLeft
    const cloudPosition = cloud.offsetLeft
    const cloud1Position = cloud1.offsetLeft
    const cloud2Position = cloud2.offsetLeft


    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');
    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;
        cloud1.style.animation = 'none';
        cloud1.style.left = `${cloud1Position}px`;
        cloud2.style.animation = 'none';
        cloud2.style.left = `${cloud2Position}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        over.style.color = 'black'
        clearInterval(loop);
    }
}, 10)



document.addEventListener('keydown', jump);

function restart(){
    window.location.reload()
}