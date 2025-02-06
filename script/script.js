document.addEventListener("DOMContentLoaded", function () {
  let dropdown = document.querySelector(".dropdown");

  dropdown.addEventListener("mouseenter", function () {
    this.querySelector(".dropdown-content").style.display = "block";
  });

  dropdown.addEventListener("mouseleave", function () {
    this.querySelector(".dropdown-content").style.display = "none";
  });
});
// Log a message when the page loads
console.log("Welcome to G's Bites! Enjoy your stay.");

// Select the buttons
const orderBtn = document.querySelector(".order-btn");
const contactBtn = document.querySelector(".contact-btn");

// Event listener for "Order Now" button
orderBtn.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default behavior
  console.log("Order Now button clicked!");
  alert("Redirecting to the Order Page...");
  window.location.href = "./pages/order.html"; // Redirect
});

// Event listener for "Contact Us" button
contactBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Contact Us button clicked!");
  alert("Redirecting to the Contact Page...");
  window.location.href = "./pages/contact.html"; // Redirect
});

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdown.addEventListener("mouseenter", function () {
    dropdownContent.style.display = "block";
  });

  dropdown.addEventListener("mouseleave", function () {
    dropdownContent.style.display = "none";
  });

  console.log("Dropdown menu initialized.");
});
