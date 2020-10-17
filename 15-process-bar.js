class ProgressBar {
    constructor(element, initialValue = 0) {
        this.valueElem = element.querySelector('.progress-bar-value');
        this.fillElem = element.querySelector('.progress-bar-fill');

        this.setValue(initialValue);
    }

    setValue(newVal) {
        if (newVal < 0) {
            newVal = 0;
        }

        if (newVal > 100) {
            newVal = 100;
        }

        this.value = newVal;
        this.update();
    }

    update() {
        const parcentage = this.value + '%'; // 50%

        this.fillElem.style.width = parcentage;
        this.valueElem.textContent = parcentage;
    }
}

const pb1 = new ProgressBar(document.querySelector('.progress-bar'));

let i = 0;
let oneMint = setInterval(function() {
    i++;

    let tikTik = parseInt( (i*100) / 60 );
    pb1.setValue(tikTik)

    if ( tikTik > 100 ) {
        clearInterval(oneMint)
    }
}, 1000);
