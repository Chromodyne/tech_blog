async function loginHandler (event) {
    console.log("Login handler called.");

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (email && password) {
        console.log("Fields properly populated.");
        console.log(`Email: ${email} Password: ${password}`);
    }


}

document.querySelector(".login-form").addEventListener("submit", loginHandler);