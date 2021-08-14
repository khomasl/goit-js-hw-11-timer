class CountdownTimer {
    constructor({selector = '#timer-1', targetDate = new Date('Aug 15, 2025 13:57')}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.idInterval = null;
        this.time = null;

        this.timerDiv   = document.querySelector(this.selector);
        this.daysValue  = document.querySelector('span[data-value="days"]');
        this.hoursValue = document.querySelector('span[data-value="hours"]');
        this.minsValue  = document.querySelector('span[data-value="mins"]');
        this.secsValue  = document.querySelector('span[data-value="secs"]');

        this.labelDay  = document.querySelector('.label__day');
        this.labelHour = document.querySelector('.label__hour');
        this.labelMin  = document.querySelector('.label__min');
        this.labelSec  = document.querySelector('.label__sec');
    }

    pad = (value) => {
        return String(value).padStart(2, '0');
    }

    getTimeComponents = () => {
        const time  = this.time;
        const days  = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));   
        const mins  = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));   
        const secs  = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return {days, hours, mins, secs};
    }

    timerSetData = () => {
        const {days, hours, mins, secs} = this.getTimeComponents();

        this.daysValue.textContent  = days;
        this.hoursValue.textContent = hours;
        this.minsValue.textContent  = mins;
        this.secsValue.textContent  = secs;

        this.labelDay.textContent  = days  === '01' ? 'Day' : 'Days'; ; 
        this.labelHour.textContent = hours === '01' ? 'Hour' : 'Hours'; 
        this.labelMin.textContent  = mins  === '01' ? 'Minute' : 'Minutes';
        this.labelSec.textContent  = secs  === '01' ? 'Second' : 'Seconds'; 
    }

// розмітка через шаблонний рядок
    // timerMakeMarkup = () => {
    //     const timerDiv = document.querySelector(this.selector);

    //     const time = this.time;
    //     const days = Math.floor(time / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    //     const secs = Math.floor((time % (1000 * 60)) / 1000);

    //     const daysM= days  > 9 ? days  : `0${days}`;
    //     const hoursM= hours > 9 ? hours : `0${hours}`;
    //     const minsM= mins  > 9 ? mins  : `0${mins}`;
    //     const secsM= secs  > 9 ? secs  : `0${secs}`;

    //     const ds= days  === 1 ? '' : 's'; 
    //     const hs= hours === 1 ? '' : 's'; 
    //     const ms= mins  === 1 ? '' : 's'; 
    //     const ss= secs  === 1 ? '' : 's'; 

    //     const markup = `
    //         <div class="field">
    //             <span class="value" data-value="days">${daysM}</span>
    //             <span class="label label__day">Day${ds}</span>
    //         </div>

    //         <div class="field">
    //             <span class="value" data-value="hours">${hoursM}</span>
    //             <span class="label label__hour">Hour${hs}</span>
    //         </div>

    //         <div class="field">
    //             <span class="value" data-value="mins">${minsM}</span>
    //             <span class="label label__min">Minute${ms}</span>
    //         </div>

    //         <div class="field">
    //             <span class="value" data-value="secs">${secsM}</span>
    //             <span class="label label__sec">Second${ss}</span>
    //         </div>
    //     `;

    //     timerDiv.innerHTML = markup;
    // }   

    timerStop = () => {
        clearInterval(this.idInterval);
    }

    timerStart = () => {
        this.time = this.targetDate - Date.now();

        if (this.time <= 0) {
            this.timerStop;
            return;
        };

        this.timerSetData();
        //this.timerMakeMarkup();
    };

    timerInit = () => {
        this.idInterval = setInterval(this.timerStart, 1000);
    }
}
const targetDate = new Date('Aug 20, 2021 12:57');
const timer = new CountdownTimer({selector: '#timer-1', targetDate: targetDate});

window.addEventListener('DOMContentLoaded', timer.timerInit);