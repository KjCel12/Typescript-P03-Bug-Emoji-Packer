export {};

// 1. Data dictionary mapping the bug type to its emoji
const bugEmojis: Record<string, string> = {
  bee: "🐝",
  spider: "🕷️",
};

// 2. Pure render function
const renderBug = (emojiElement: HTMLParagraphElement, emoji: string) => {
  emojiElement.innerText = emoji;
};


const bugEmojiElement = document.querySelector<HTMLParagraphElement>('#bug-emoji')!;
const selectElement = document.querySelector<HTMLSelectElement>('#species')!;

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