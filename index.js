 // responsive navigation menu javascript
 const menuBtn = document.querySelector(".menu-btn");
 const navigation = document.querySelector(".navigation");
  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
     navigation.classList.toggle("active");
 });



 //this is for the search button
// Function to show the search input field when the search button is clicked
function showSearchInput() {
  const searchInput = document.querySelector(".searchinput");
  searchInput.style.display = "inline-block"; // Display the input field
  searchInput.focus(); // Focus on the input field
}



//this is for the login and sign up button
// Function to open the login pop-up
function openLoginPopup() {
  document.getElementById("loginForm").style.display = "block";
}

// Function to close the login pop-up
function closeLoginPopup() {
  document.getElementById("loginForm").style.display = "none";
}

// Function to open the sign-up pop-up
function openSignupPopup() {
  document.getElementById("signupForm").style.display = "block";
}

// Function to close the sign-up pop-up
function closeSignupPopup() {
  document.getElementById("signupForm").style.display = "none";
}

// Event listeners for login and sign-up buttons
document.getElementById("loginBtn").addEventListener("click", openLoginPopup);
document.getElementById("signupBtn").addEventListener("click", openSignupPopup);

// Event listeners for close buttons
document.getElementById("closeLoginBtn").addEventListener("click", closeLoginPopup);
document.getElementById("closeSignupBtn").addEventListener("click", closeSignupPopup);






//this is for the subscribe button
const subscribeLink = document.getElementById("subscribeLink");
const subscribeForm = document.getElementById("subscribeForm");
const closeBtn = document.getElementById("closeBtn");
// Function to display the pop-up form
function openSubscribeForm() {
    subscribeForm.style.display = "block";
}
// Function to close the pop-up form
function closeSubscribeForm() {
    subscribeForm.style.display = "none";
}
// Event listeners
subscribeLink.addEventListener("click", openSubscribeForm);
closeBtn.addEventListener("click", closeSubscribeForm);

// Close the pop-up when clicking outside the form
window.addEventListener("click", function (event) {
    if (event.target === subscribeForm) {
        closeSubscribeForm();
    }
});




// Function to open a pop-up by ID
  function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "block";
    }
  }
  // Function to close a pop-up by ID
  function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
      popup.style.display = "none";
    }
  }
  // Add event listeners to buttons for opening and closing pop-ups
  document.addEventListener("DOMContentLoaded", function () {
    var openButtons = document.querySelectorAll(".openPopupButton");
    var closeButtons = document.querySelectorAll(".closePopupButton");

    // Add click event listeners to open buttons
    openButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var popupId = button.getAttribute("data-popup");
        openPopup(popupId);
      });
    });
    // Add click event listeners to close buttons
    closeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var popupId = button.getAttribute("data-popup");
        closePopup(popupId);
      });
    });
  });

