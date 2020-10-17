const parent = document.getElementById('parent');
const child = document.getElementById('child');


parent.addEventListener('click', function() {   // |THIS
    console.log('I am the BUBBLING PARENT.');   // |EXAMPLE
});                                             // |OF
                                                //?|BUBBLING
child.addEventListener('click', function() {    // |CHILD
    console.log('I am the BUBBLING CHILD.');    // |TO
});                                             // |PARENT


parent.addEventListener('click', function() {   // |THIS
    console.log('I am the CAPTURING PARENT.');  // |EXAMPLE
}, true);                                       // |OF
                                                //?|CAPTURING
child.addEventListener('click', function() {    // |PARENT
    console.log('I am the CAPTURING CHILD.');   // |TO
}, true);                                       // |CHILD