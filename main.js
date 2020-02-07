const MAX = 800; 

let contianer =document.getElementById('square-container');

class Square {
    constructor(x,y,size) {
        this.div = document.createElement('div')
        this.div.classList.add('square');
        this.div.style.left = `${x}px`; 
        this.div.style.top = `${y}px`;
        this.div.style.width = `${size}px`;
        this.div.style.height = `${size}px`;
        //let blah = this;
        this.div.addEventListener('click', () => {
            console.log(this);
            this.updateColor();
            this.updateLocation();
        })
        this.updateColor();
        contianer.append(this.div);
    }

    updateColor() {
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)})`
        // result in some thing like rgb(117, 24, 32)
        this.div.style.backgroundColor = randomColor;
    }

    updateLocation() {
        let xVal = randomVal(0,MAX);
        let yVal = randomVal(0,MAX);
        this.div.style.left = `${xVal}px`; 
        this.div.style.top = `${yVal}px`;
    }
}
let sqButton = document.getElementById('sq-button');
sqButton.addEventListener('click',insertSquare);

function insertSquare() {
    let xVal = randomVal(0,MAX);
    let yVal = randomVal(0,MAX);
    let size = randomVal(25,100);
    let sq = new Square(xVal, yVal,size);
    //alert('clciked');
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}