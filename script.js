const MAX_CHARS = 200;

const messageArea = document.getElementById('messageArea');
const charCount = document.getElementById('charCount');
const warningMessage = document.getElementById('warningMessage');

// Event listener to track input and update counter in real time
messageArea.addEventListener('input', function () {
    let typed = messageArea.value.length;

    // Prevent exceeding the character limit
    if (typed > MAX_CHARS) {
        messageArea.value = messageArea.value.substring(0, MAX_CHARS);
        typed = MAX_CHARS;
    }

    const remaining = MAX_CHARS - typed;

    // Update character count display
    charCount.textContent = typed + '/' + MAX_CHARS + ' characters';

    // Show or hide warning message
    if (remaining === 0) {
        warningMessage.classList.remove('hidden');
    } else {
        warningMessage.classList.add('hidden');
    }
});