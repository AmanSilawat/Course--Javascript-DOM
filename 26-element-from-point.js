// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'elementFromPoint - DOM';
document.body.appendChild(h2);

// create inner tag
const inner = document.createElement('div');
inner.classList.add('inner');

// create div tag
const outer = document.createElement('div');
outer.classList.add('outer');

// append inner in outer
outer.appendChild(inner);
document.body.appendChild(outer);

// Mourse moveEvent: get x and y position
let pos;
document.addEventListener('mousemove', function ({ pageX, pageY }) {
    pos = `${pageX}, ${pageY}`;
});

//! Important : goto console in browser, press 'eye icon right side of bar', Enter 'pos' variable inside of expression input box, using this method to (Status preview live)

// what element in this position
document.elementFromPoint(20, 94); // <div class=​"outer">​…​</div>​
document.elementFromPoint(70, 127); // <div class=​"inner">​</div>​

// what element in this position
//? Disable: pointerEvents is disable on inner div
inner.style.pointerEvents = 'none';
document.elementFromPoint(70, 127); // <div class=​"outer">​…​</div>​

// Using elementsFromPoint
document.elementsFromPoint(70, 127); // [div.outer, body, html]
