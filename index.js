// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.getElementById("colorBtn").addEventListener("click", function() {
    var element = document.querySelector('.w3-content'); // Select the element with the class "example-class"
    element.style.backgroundColor = "lightgrey";
});

document.getElementById("send").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    var name = document.querySelector('input[name="Name"]').value;
    var email = document.querySelector('input[name="Email"]').value;
    var message = document.querySelector('input[name="Message"]').value;
    if (name && email && message) {
        alert("Form submitted successfully!\nName: " + name + "\nEmail: " + email + "\nMessage: " + message);
    } else {
        alert("Please fill out all fields!"); // Displays an alert if any field is empty
    }
});
var colorChangeText = document.getElementById("colorChangeText");

colorChangeText.addEventListener("mouseover", function() {
    colorChangeText.style.color = "red"; // Change text color to red on hover
});

colorChangeText.addEventListener("mouseout", function() {
    colorChangeText.style.color = "black"; // Change text color back to black when not hovering
});


var dropdownContent = document.getElementById("mydrop");

var isDropdownVisible = false;

function toggleDropdown() {
    if (isDropdownVisible) {
        dropdownContent.style.animation = "none";
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
        dropdownContent.style.animation = "slideDown 0.5s forwards";
    }
    isDropdownVisible = !isDropdownVisible;
}
