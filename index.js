
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const diceImageFilename1 = `images/dice${randomNumber1}.png`;
const leftImage = document.querySelector('.img1');
leftImage.setAttribute('src', diceImageFilename1);

function check_win(nb1, nb2) {
    if (nb1 > nb2)
        return 1;
    else if (nb1 < nb2)
        return 2;
    else
        return 0;
}

const rightImage = document.querySelector('.img2');
rightImage.classList.add('rotate');

setTimeout(() => {
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const diceImageFilename2 = `images/dice${randomNumber2}.png`;
    rightImage.classList.remove('rotate');
    rightImage.setAttribute('src', diceImageFilename2);
    const checker = check_win(randomNumber1, randomNumber2);
    const text = document.querySelector('h1');
    
    if (checker === 1)
        text.innerHTML = "Player WIN !";
    else if (checker === 2)
        text.innerHTML = "CPU WIN ! You're so Bad...";
    else
        text.innerHTML = "Draw !";
}, 2000);

function refreshPage() {
    // document.getElementById('clickSound').play();
    location.reload(true);
}
