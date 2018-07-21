var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tapir-looking-drowsy.jpeg') {
        myImage.setAttribute('src', 'images/tapir-with-open-mouth.jpg');
    } else {
        myImage.setAttribute('src', 'images/tapir-looking-drowsy.jpeg');
    }
}

var myButton = document.querySelector('button');
var myGreeting = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myGreeting.textContent = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myGreeting.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
