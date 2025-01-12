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


       
       // javascript for video slider navigation
        const btns = document.querySelectorAll(".nav-btn");
        const slides = document.querySelectorAll(".video-slide");

        var slidernav = function(manual){
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });
            slides.forEach((btn) => {
                btn.classList.remove("active");
            });
            
            btns [manual].classList.add("active");
            slides [manual].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                slidernav(i);
            });
        });
        
        
        document.getElementById('next').onclick = function(){
          let lists = document.querySelectorAll('.discount');
          document.getElementById('promotion').appendChild(lists[0]);
      }
      document.getElementById('prev').onclick = function(){
          let lists = document.querySelectorAll('.discount');
          document.getElementById('promotion').prepend(lists[lists.length - 1]);
      }


      document.addEventListener("DOMContentLoaded", function () {
        // Select all gallery sections with class "galleryeffect" and their corresponding containers
        const gallerySections = document.querySelectorAll(".galleryeffect");
    
        gallerySections.forEach(section => {
            const container = section.querySelector(".galleryhover");
            const boxes = container.querySelectorAll(".boxes");
    
            boxes.forEach(box => {
                box.addEventListener("mouseenter", function () {
                    container.style.gridTemplateColumns = getGridTemplateColumns(box.classList);
                });
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
    