const questionElement = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const wrongAnswerElement = document.getElementById('wrongAnswer');

let clickCount = 0;
let textSize = 24; // Initial font size

yesBtn.addEventListener('click', () => {
    clickCount++;
    textSize += 4; // Increase text size with each question
    questionElement.style.fontSize = textSize + 'px';

    if (clickCount === 1) {
        questionElement.textContent = "Do you really love me? Shiza!";
    } else if (clickCount === 2) {
        questionElement.textContent = "Are you sure? Really?";
    } else if (clickCount === 3) {
        questionElement.textContent = "Think about it again. Do you really love me?";
    } else if (clickCount === 4) {
        questionElement.textContent = "can you really stay with me forever?";
    }
    else if (clickCount === 5) {
        yesBtn.classList.add('hidden');
        noBtn.classList.add('hidden');
        questionElement.classList.add('hidden');
        const loveMessage = document.createElement('h1');
        loveMessage.textContent = "Ok, I love you too Shizaaaa!😘";
        loveMessage.id = 'loveMessage';
        document.body.appendChild(loveMessage);

        // Show kisses without hiding the love message
        showKisses();
    }
});

noBtn.addEventListener('click', () => {
    wrongAnswerElement.classList.remove('hidden');
    wrongAnswerElement.classList.add('vibrate');
    setTimeout(() => {
        wrongAnswerElement.classList.add('hidden');
        wrongAnswerElement.classList.remove('vibrate');
    }, 1000);
});

function showKisses() {
    const kissesContainer = document.createElement('div');
    kissesContainer.classList.add('kisses');

    for (let i = 0; i < 100; i++) {
        const kiss = document.createElement('span');
        kiss.textContent = '😘';
        kiss.style.left = Math.random() * 100 + 'vw';
        kiss.style.top = Math.random() * 100 + 'vh';
        kiss.style.animationDuration = Math.random() * 3 + 2 + 's';
        kissesContainer.appendChild(kiss);
    }

    document.body.appendChild(kissesContainer);

    setTimeout(() => {
        kissesContainer.remove();
    }, 5000); // Remove kisses after 5 seconds, but keep the love message
}
