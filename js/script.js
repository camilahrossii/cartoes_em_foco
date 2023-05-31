const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const whatsAppInput = document.getElementById('wpp');
const messageInput = document.getElementById('message');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (nameInput.value === '') {
        document.getElementById('name-error').style.display = 'block';
        return
    } else {
        document.getElementById('name-error').style.display = 'none'
    }

    if(emailInput.value === '' || !isEmailValid(emailInput.value)) {
        document.getElementById('email-error').style.display = 'block';
        return
    } else {
        document.getElementById('email-error').style.display = 'none';
    }

    if (whatsAppInput.value === '' || !isValidPhone(whatsAppInput.value)) {
        document.getElementById('wpp-error').style.display = 'block';
        return
    } else {
        document.getElementById('wpp-error').style.display = 'none'
    }

    if (messageInput.value === '') {
        document.getElementById('msg-error').style.display = 'block';
        return
    } else {
        document.getElementById('msg-error').style.display = 'none'
    }

    form.submit()
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;
}

function isValidPhone(phone) {
    const brazilianPhoneRegex = new RegExp(
        /^[0-9]{10,11}$/
    )

    if(brazilianPhoneRegex.test(phone)) {
        return true;
    }
    return false;
}