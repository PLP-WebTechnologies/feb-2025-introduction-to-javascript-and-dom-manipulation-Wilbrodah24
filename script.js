
// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const changeableText = document.getElementById('changeable-text');

changeTextBtn.addEventListener('click', () => {
    const texts = [
        "Text changed by JavaScript!",
        "DOM manipulation is powerful!",
        "You can create dynamic content!",
        "Web pages can be interactive!",
        "Back to original text"
    ];
    
    const currentText = changeableText.textContent;
    const currentIndex = texts.indexOf(currentText);
    const nextIndex = (currentIndex + 1) % texts.length;
    
    changeableText.textContent = texts[nextIndex];
});

// Modify CSS styles via JavaScript
const styleChangeBtn = document.getElementById('style-change-btn');
const contentSection = document.getElementById('content-section');

styleChangeBtn.addEventListener('click', () => {
    // Toggle between two style states
    if (contentSection.style.backgroundColor === 'lightblue') {
        contentSection.style.backgroundColor = '#f8f8f8';
        contentSection.style.border = 'none';
        contentSection.style.padding = '0';
    } else {
        contentSection.style.backgroundColor = 'lightblue';
        contentSection.style.border = '2px solid darkblue';
        contentSection.style.padding = '20px';
        contentSection.style.borderRadius = '8px';
    }
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleContainer = document.getElementById('toggle-container');
const removableElement = document.getElementById('removable-element');

toggleElementBtn.addEventListener('click', () => {
    if (removableElement.parentNode === toggleContainer) {
        toggleContainer.removeChild(removableElement);
        toggleElementBtn.textContent = 'Add Element Back';
    } else {
        toggleContainer.appendChild(removableElement);
        toggleElementBtn.textContent = 'Remove Element';
    }
});