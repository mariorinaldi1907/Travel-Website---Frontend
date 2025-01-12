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




// JavaScript to handle button clicks and show/hide containers

// Function to show a specific container
function showContainer(containerId) {
    const container = document.getElementById(`${containerId}a`);
    container.style.display = 'block';
}

// Function to hide a specific container
function hideContainer(containerId) {
    const container = document.getElementById(`${containerId}a`);
    container.style.display = 'none';
}

// Attach event listeners to buttons
document.querySelectorAll('.show-container-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const containerId = event.target.getAttribute('data-container-id');
        showContainer(containerId);
    });
});

document.querySelectorAll('.hide-container-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const containerId = event.target.getAttribute('data-container-id');
        hideContainer(containerId);
    });
});
