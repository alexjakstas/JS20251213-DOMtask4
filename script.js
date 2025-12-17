// 4. Add New List Item from Input
// Task:

// When the button is clicked:

// Read the value from the input.
// Create a new <li> element.
// Set its text to the input value.
// Append it to the #items list.
// Clear the input afterwards.

let btn = document.getElementById('add-item-btn')
let txt = document.getElementById('item-input')
let ul = document.getElementById('items');

btn.addEventListener('click', function() {
  let list = document.createElement('li')
  list.innerHTML = txt.value;
  ul.appendChild(list);
  txt.value = "";
})