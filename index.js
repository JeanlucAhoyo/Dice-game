function check_win(nb1, nb2) {
    if (nb1 > nb2)
        return 1;
    else if (nb1 < nb2)
        return 2;
    else
        return 0;
}

function refreshDice() {
    const leftImage = document.querySelector('.img1');
    const rightImage = document.querySelector('.img2');
    const text = document.querySelector('h1');

    // Generate new random numbers for both dice
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const diceImageFilename1 = `images/dice${randomNumber1}.png`;
    leftImage.setAttribute('src', diceImageFilename1);

    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const diceImageFilename2 = `images/dice${randomNumber2}.png`;
    rightImage.classList.add('rotate');

    // Wait for a short duration before revealing the second dice to simulate rotation
    setTimeout(() => {
        rightImage.classList.remove('rotate');
        rightImage.setAttribute('src', diceImageFilename2);

        // Check the winner
        const checker = check_win(randomNumber1, randomNumber2);

        // Update the result text
        if (checker === 1)
            text.innerHTML = "Player WIN !";
        else if (checker === 2)
            text.innerHTML = "CPU WIN ! You're so Bad...";
        else
            text.innerHTML = "Draw !";
    }, 1000); // Adjust the duration based on your preference
}

// Call refreshDice() when the button is clicked
document.querySelector('.refresh-button').addEventListener('click', refreshDice);
