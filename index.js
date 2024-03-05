console.log('bobbyhadz.com');

const element = document.getElementById('first_name');

// ✅ Check if element is an Input
if (element.tagName.toLowerCase() === 'input') {
  console.log('element is an input');
} else {
  console.log('element is NOT an input');
}

// -----------------------------------------------

// ✅ Check if element is Textarea
if (element.tagName.toLowerCase() === 'textarea') {
  console.log('element is a textarea');
} else {
  console.log('element is NOT a text area');
}

// -----------------------------------------------

// ✅ Check if element is input of specific type
if (
  element.tagName.toLowerCase() === 'input' &&
  element.getAttribute('type') === 'text'
) {
  console.log('element is an input of type text');
} else {
  console.log('element is NOT an input of type text');
}
