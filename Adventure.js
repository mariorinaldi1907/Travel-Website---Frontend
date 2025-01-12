// Check if the variable menuBtn already exists before declaring it
if (typeof menuBtn === 'undefined') {
    const menuBtn = document.querySelector(".menu-btn");
    const navigation = document.querySelector(".navigation");
    
    // Ensure that the menuBtn element exists before adding the event listener
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("active");
        navigation.classList.toggle("active");
      });
    }
  }
  



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




// description for the sliding mechanism 

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".galleryhover");
    const boxes = container.querySelectorAll(".boxes");

    boxes.forEach(box => {
        box.addEventListener("mouseenter", function () {
            container.style.gridTemplateColumns = getGridTemplateColumns(box.classList);
        });
    });

    function getGridTemplateColumns(classList) {
        if (classList.contains("one")) {
            return "2fr 0.5fr 0.5fr 0.5fr 0.5fr";
        } else if (classList.contains("two")) {
            return "0.5fr 2fr 0.5fr 0.5fr 0.5fr";
        } else if (classList.contains("three")) {
            return "0.5fr 0.5fr 2fr 0.5fr 0.5fr";
        } else if (classList.contains("four")) {
            return "0.5fr 0.5fr 0.5fr 2fr 0.5fr";
        } else if (classList.contains("five")) {
            return "0.5fr 0.5fr 0.5fr 0.5fr 2fr";
        } else {
            return "1fr 1fr 1fr 1fr 1fr"; // Default layout
        }
    }
});

function toggleContent(button) {
    const moreContent = button.previousElementSibling;
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        button.textContent = "Read Less";
    } else {
        moreContent.style.display = "none";
        button.textContent = "Read More";
    }
}

 