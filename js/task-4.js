const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event){
event.preventDefault();

const form = event.target;
const email = form.elements.email.value.trim();
const password = form.elements.password.value.trim();

if (email === '' || password === '') {
    return alert('All form fields must be filled in');
}

const formElem = {
    email: email,
    password: password
};

console.log(formElem);
form.reset();
};



    

