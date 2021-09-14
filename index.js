const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
  
const refs = {
    body: document.body,
    start : document.querySelector('[data-action="start"]'),
    stop : document.querySelector('[data-action="stop"]')
}

let interval = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


function colorChanger() {
    refs.start.disabled = true;
    interval = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000);
}

function stopColorChanger() {
    clearInterval(interval)
    refs.start.disabled = false;
}

refs.start.addEventListener('click', colorChanger);

refs.stop.addEventListener('click', stopColorChanger);