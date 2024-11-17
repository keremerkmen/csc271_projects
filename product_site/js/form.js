// ============================
// Contact Form Validation Script
// ============================

// Selecting form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Feedback elements
const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const messageFeedback = document.getElementById('messageFeedback');
const formFeedback = document.getElementById('formFeedback');

// Validation flags
let validName = false;
let validEmail = false;
let validMessage = false;

/*
=====================
Name Validation
=====================
*/

// Function for name focus event
function handleNameFocus() {
    nameFeedback.textContent = 'Please enter your full name (First and Last).';
}

// Function for name blur event
function handleNameBlur() {
    const nameValue = nameInput.value.trim();
    if (nameValue === '') {
        nameInput.style.borderColor = 'red';
        nameFeedback.textContent = 'Name cannot be empty. Please try again.';
        validName = false;
    } else if (nameValue.split(' ').length < 2) {
        nameInput.style.borderColor = 'red';
        nameFeedback.textContent = 'Please enter your full name (First and Last).';
        validName = false;
    } else {
        nameInput.style.borderColor = '#ccc';
        nameFeedback.textContent = '';
        validName = true;
    }
}

nameInput.addEventListener('focus', handleNameFocus);
nameInput.addEventListener('blur', handleNameBlur);

/*
=====================
Email Validation
=====================
*/

// Function for email focus event
function handleEmailFocus() {
    emailFeedback.textContent = 'Please enter a valid email address (e.g., name@example.com).';
}

// Function for email blur event
function handleEmailBlur() {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (emailValue === '') {
        emailInput.style.borderColor = 'red';
        emailFeedback.textContent = 'Email cannot be empty. Please try again.';
        validEmail = false;
    } else if (!emailPattern.test(emailValue)) {
        emailInput.style.borderColor = 'red';
        emailFeedback.textContent = 'Please enter a valid email address.';
        validEmail = false;
    } else {
        emailInput.style.borderColor = '#ccc';
        emailFeedback.textContent = '';
        validEmail = true;
    }
}

emailInput.addEventListener('focus', handleEmailFocus);
emailInput.addEventListener('blur', handleEmailBlur);

/*
=====================
Message Validation
=====================
*/

// Function for message focus event
function handleMessageFocus() {
    messageFeedback.textContent = 'Please enter your message (up to 180 characters).';
}

// Function for message blur event
function handleMessageBlur() {
    const messageValue = messageInput.value.trim();
    if (messageValue === '') {
        messageInput.style.borderColor = 'red';
        messageFeedback.textContent = 'Message cannot be empty. Please try again.';
        validMessage = false;
    } else if (messageValue.length > 180) {
        messageInput.style.borderColor = 'red';
        messageFeedback.textContent = 'Message cannot exceed 180 characters.';
        validMessage = false;
    } else {
        messageInput.style.borderColor = '#ccc';
        messageFeedback.textContent = '';
        validMessage = true;
    }
}

messageInput.addEventListener('focus', handleMessageFocus);
messageInput.addEventListener('blur', handleMessageBlur);

/*
=====================
Form Submission
=====================
*/

// Function for form submission event
function handleFormSubmit(event) {
    // Prevent form submission if any field is invalid
    if (!validName || !validEmail || !validMessage) {
        event.preventDefault();
        formFeedback.textContent = 'Please correct the highlighted fields and try again.';
        formFeedback.style.color = 'red';
    } else {
        formFeedback.textContent = 'Your responses were successfully recorded!';
        formFeedback.style.color = 'green';
        alert(`Thank you for reaching out, ${nameInput.value}! We will get back to you soon.`);
    }
}

form.addEventListener('submit', handleFormSubmit);
