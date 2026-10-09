// 1. Data dictionary mapping the bug type to its emoji
const bugEmojis = {
    bee: "🐝",
    spider: "🕷️",
};
// 2. Pure render function
const renderBug = (emojiElement, emoji) => {
    emojiElement.innerText = emoji;
};
const bugEmojiElement = document.querySelector('#bug-emoji');
const selectElement = document.querySelector('#species');
const initializeApp = () => {
    // 4. Event listener referencing the data map and render function
    selectElement.addEventListener("change", e => {
        const isSelect = e.target;
        if (isSelect instanceof HTMLSelectElement) {
            const selectedBug = isSelect.value;
            const emoji = bugEmojis[selectedBug];
            if (emoji) {
                renderBug(bugEmojiElement, emoji);
            }
        }
    });
};
document.addEventListener("DOMContentLoaded", initializeApp);
export {};
