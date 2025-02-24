// Function to toggle dropdown visibility
function ddFunction() {
    let dropdown = document.getElementById("dropitems");
    
    // Toggle dropdown display between block and none
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
    let dropdown = document.getElementById("dropitems");
    let button = document.querySelector(".ddbtn");
    
    // If the click is outside the dropdown and button, close it
    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});
