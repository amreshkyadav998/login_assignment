document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
     alert('Form submitted. Refreshing the page...');
    window.location.reload();
});

// password show-hidden
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}

const enrollBtn = document.getElementById('enrollBtn');
const enrollContent = document.getElementById('enrollContent');

// Function to toggle visibility
function toggleEnrollContent() {
    if (enrollContent.style.display === "none") {
        enrollContent.style.display = "block";
    } else {
        enrollContent.style.display = "none";
    }
}

// touch and click event
enrollBtn.addEventListener('touchstart', function(event) {
    event.preventDefault(); 
    toggleEnrollContent();
});

enrollBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    toggleEnrollContent();
});

