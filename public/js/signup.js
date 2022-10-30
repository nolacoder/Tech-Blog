const signupFormHandler = async (event) => {
    event.preventDefault();

    const user = document.querySelector('#username-input-signup').value.trim();
    const password = document.querySelector('#password-input-signup').value.trim();

    if (user && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ user, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);

