const changeColor = document.getElementById("changeColor");
const buttonOptions = document.getElementById("buttonDivv");
const selectedClassName = "current";
const buttonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});

function handleButtonClick(e) {
    const current = e.target.parentElement.querySelector(`.${selectedClassName}`);
    if (current && current !== e.target) {
        current.classList.remove(selectedClassName);
    }

    const color = e.target.dataset.color;
    e.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
    changeColor.style.backgroundColor = color;
};

function constructOptions(buttonColors) {
 chrome.storage.sync.get("color", (data) => {
     const currentColor = data.color;

     for (let buttonColor of buttonColors) {
        const button = document.createElement("button");
        button.dataset.color = buttonColor;
        button.style.backgroundColor = buttonColor;

        if (buttonColor === currentColor) {
            button.classList.add(selectedClassName);
        }

        button.addEventListener("click", handleButtonClick)
        buttonOptions.appendChild(button);
     }
 })
};

constructOptions(buttonColors);