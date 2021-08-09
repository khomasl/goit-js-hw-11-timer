import { colors } from './colors.js';
import { body, btnStart } from './refs.js';
import { randomIntegerFromInterval } from './random.js';

let timerId;

const colorSwitch = () => {
    const idxColor = randomIntegerFromInterval(0, colors.length);
    body.style.backgroundColor = colors[idxColor];
}

export function onColorSwitchStart (e)  {
    e.preventDefault();
    btnStart.disabled = true;
    timerId = setInterval(colorSwitch, 1000);
}

export function onColorSwitchStop () {
    clearInterval(timerId);
    btnStart.disabled = false;
}