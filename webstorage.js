// loaclStorage.setItem('test', 1);
// alert(loaclStorage.getItem('tset'));
// // object like access -Generally not recommanded 
// // set key
// localStorage.test = 2;loacl
// //get key
// alert(localStorage.test);
// //looping over the keys
// for(let i=0; i<localStorage.length;i++){
//     let key = localStorage.key(i);
//     alert(`${key}:${loaclStorage.getItem(key)}`);
// }
// //using for in loop

// // for(let key in localStorage);
// //
// /// store string values
// localStorage.user = {name: "johan"};
// alert(localStorage.user);
// //we can use JSON
// localStorage.user = JSON.stringify({name: "Johan"});
// let user = JSON.parse(loaclStorage.user);
// alert(user);

// //session storage
// sessionStorage.setItem('one',1);
// alert(sessionStorage.getItem('one'));
// Local Storage
// const localInput = document.getElementById('local-input');
// const localBtn = document.getElementById('local-btn');
// const localOutput = document.getElementById('local-output');

// localBtn.addEventListener('click', function() {
// 	const value = localInput.value;
// 	if (value) {
// 		localStorage.setItem('myValue', value);
// 		localOutput.textContent = 'Value saved to local storage.';
// 	} else {
// 		localOutput.textContent = 'Please enter a value.';
// 	}
// });

// window.addEventListener('load', function() {
// 	const value = localStorage.getItem('myValue');
// 	if (value) {
// 		localOutput.textContent = 'Value retrieved from local storage: ' + value;
// 	}
// });


// // Session Storage
// const sessionInput = document.getElementById('session-input');
// const sessionBtn = document.getElementById('session-btn');
// const sessionOutput = document.getElementById('session-output');

// sessionBtn.addEventListener('click', function() {
// 	const value = sessionInput.value;
// 	if (value) {
// 		sessionStorage.setItem('myValue', value);
// 		sessionOutput.textContent = 'Value saved to session storage.';
// 	} else {
// 		sessionOutput.textContent = 'Please enter a value.';
// 	}
// });

// window.addEventListener('load', function() {
	// const
// Local Storage
const localInput = document.getElementById('local-input');
const localBtn = document.getElementById('local-btn');
const localOutput = document.getElementById('local-output');

localBtn.addEventListener('click', function() {
	const value = localInput.value;
	if (value) {
		localStorage.setItem('myValue', value);
		localOutput.textContent = 'Value saved to local storage.';
	} else {
		localOutput.textContent = 'Please enter a value.';
	}
});

window.addEventListener('load', function() {
	const value = localStorage.getItem('myValue');
	if (value) {
		localOutput.textContent = 'Value retrieved from local storage: ' + value;
	}
});


// Session Storage
const sessionInput = document.getElementById('session-input');
const sessionBtn = document.getElementById('session-btn');
const sessionOutput = document.getElementById('session-output');

sessionBtn.addEventListener('click', function() {
	const value = sessionInput.value;
	if (value) {
		sessionStorage.setItem('myValue', value);
		sessionOutput.textContent = 'Value saved to session storage.';
	} else {
		sessionOutput.textContent = 'Please enter a value.';
	}
});

//   