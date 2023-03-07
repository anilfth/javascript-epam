// Create the navbar container element
const navbar = document.createElement('nav');
navbar.classList.add('navbar');

// Create the logo element
const logo = document.createElement('a');
logo.href = '#';
logo.textContent = 'Yoga';
logo.classList.add('navbar__Yoga');

// Create the list container element
const listContainer = document.createElement('li');
listContainer.classList.add('navbar__list');

// Create the list items
const listItem1 = document.createElement('li');
listItem1.classList.add('navbar__list-item');
const link1 = document.createElement('a');
link1.href = '#';
link1.textContent = 'Home';
listItem1.appendChild(link1);

const listItem2 = document.createElement('li');
listItem2.classList.add('navbar__list-item');
const link2 = document.createElement('a');
link2.href = '#';
link2.textContent = 'About';
listItem2.appendChild(link2);

const listItem3 = document.createElement('li');
listItem3.classList.add('navbar__list-item');
const link3 = document.createElement('a');
link3.href = '#';
link3.textContent = 'Contact';
listItem3.appendChild(link3);

// const listItem4 = document.createElement('li');
// listItem3.classList.add('navbar__list-item');
// const link3 = document.createElement('a');
// link3.href = '#';
// link3.textContent = 'Sign in';
// listItem3.appendChild(link4);

// Add the list items to the list container
listContainer.appendChild(listItem1);
listContainer.appendChild(listItem2);
listContainer.appendChild(listItem3);
// listContainer.appendChild(listItem4);

// Add the logo and list container to the navbar
navbar.appendChild(yoga);
navbar.appendChild(listContainer);

// Add the navbar to the page
const body = document.querySelector('body');
body.insertBefore(navbar, body.firstChild);
