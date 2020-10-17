{
    /* <ul id="list1">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
    
    <ul id="list2">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul> */
}

const list = document.querySelectorAll('li');
console.log(list); // [li, li, li, li, li, li]

const list2 = document.querySelectorAll('#list2 li');
console.log(list2); // [li, li, li]