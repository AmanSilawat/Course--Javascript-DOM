{/* <h2 id="title">Welcome to FAANG!</h2> */}

// Add a h2 tag
const h2 = document.createElement('h2');
h2.setAttribute('id', 'title');
h2.textContent = "Welcome to FAANG!";
document.body.appendChild(h2);


// get h2 dom and change txt
const h2Title = document.getElementById('title');

h2Title.textContent = "Change Heading text";
h2Title.innerHTML = "<em>Change Heading text</em>";
