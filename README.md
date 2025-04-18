# Introduction to JavaScript and DOM Manipulation

## Objectives

Write basic JavaScript functions.
Manipulate the DOM dynamically.
Respond to user interactions.

## Instructions

- Create a script.js file and link it to a HTML.
- Structure the document using DOCTYPE, html, head, and body.

>[!NOTE]
>  - Write JavaScript that:
>  - Changes text content dynamically.
>  - Modifies CSS styles via JavaScript.
>  - Adds or removes an element when a button is clicked.


# Tasks
- Create a well-structured HTML5 document.
- Use at least 5 different HTML elements.
- Ensure semantic correctness.

Happy Coding! 💻✨





 index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Content Demo</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1 id="main-heading">Welcome to My Website Page</h1>
    </header>
    
    <main>
        <section class="content-section">
            <p id="dynamic-text">This is some sample text that will change.</p>
            <button id="text-changer">Change Text</button>
        </section>
        
        <section class="style-section">
            <div id="style-box">This box will change style</div>
            <button id="style-changer">Change Style</button>
        </section>
        
        <section class="element-section">
            <div id="element-container">
                <p>Click the button to add/remove elements</p>
            </div>
            <button id="element-toggler">Toggle Element</button>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2025 Dynamic Content Demo</p>
    </footer>
</body>
</html>
```

script.js
```javascript
// Change text content dynamically
const textChanger = document.getElementById('text-changer');
const dynamicText = document.getElementById('dynamic-text');

textChanger.addEventListener('click', () => {
    const texts = [
        "Text has been changed!",
        "JavaScript is powerful!",
        "Dynamic content is fun!",
        "Web development rocks!",
        "You clicked me again!"
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    dynamicText.textContent = texts[randomIndex];
});

// Modify CSS styles via JavaScript
const styleChanger = document.getElementById('style-changer');
const styleBox = document.getElementById('style-box');

styleChanger.addEventListener('click', () => {
    const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
    const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier New', 'Comic Sans MS'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    
    styleBox.style.backgroundColor = randomColor;
    styleBox.style.fontFamily = randomFont;
    styleBox.style.padding = '20px';
    styleBox.style.borderRadius = '10px';
    styleBox.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
});

// Add or remove an element when a button is clicked
const elementToggler = document.getElementById('element-toggler');
const elementContainer = document.getElementById('element-container');
let toggleState = false;

elementToggler.addEventListener('click', () => {
    if (!toggleState) {
        const newElement = document.createElement('div');
        newElement.textContent = 'New element added!';
        newElement.className = 'added-element';
        newElement.style.color = 'pink';
        newElement.style.marginTop = '10px';
        elementContainer.appendChild(newElement);
    } else {
        const lastElement = elementContainer.querySelector('.added-element');
        if (lastElement) {
            elementContainer.removeChild(lastElement);
        }
    }
    toggleState = !toggleState;
});
```

styles.css 
```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

header, main, footer {
    margin-bottom: 20px;
}

.content-section, .style-section, .element-section {
    margin-bottom: 32px;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

button {
    padding: 8px 16px;
    background-color: #4CAF50;
    color: blue;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

button:hover {
    background-color: #45a049;
}

#style-box {
    padding: 16px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}
```



