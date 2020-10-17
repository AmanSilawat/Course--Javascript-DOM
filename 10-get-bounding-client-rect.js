// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = 'getBoundingClintRect - DOM';
document.body.appendChild(h2);


// Add a p tag
const p = document.createElement('p');
p.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sit deleniti omnis nemo atque placeat, inventore et quisquam voluptates similique temporibus id voluptas voluptatibus eveniet! Ab cum harum recusandae velit?";
document.body.appendChild(p);

// paragraph append multiple time
for (let i = 0; i < 9; i++) {
    document.body.appendChild(p.cloneNode(true));
}

// Add a box tag
const box = document.createElement('div');
box.classList.add('box');
document.body.appendChild(box);


// when compelely show the box than chnage color
window.addEventListener('scroll', function() {
    if (box.getBoundingClientRect().bottom < window.innerHeight) {
        box.classList.add('red-bg');
    }else {
        box.classList.remove('red-bg');
    }
    console.log(box.getBoundingClientRect().bottom, window.innerHeight);
})