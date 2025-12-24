function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error");
    error.innerText = "";
    if (name === "") {
        error.innerText = "Please enter your name.";
        return false;
    }
    if (email === "") {
        error.innerText = "Please enter your email address.";
        return false;
    }
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        error.innerText = "Please enter a valid email address.";
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
const emailInput = document.querySelector('input[type="email"]');
emailInput.value = localStorage.getItem("savedEmail") || "";
emailInput.addEventListener("input", () => {
    localStorage.setItem("savedEmail", emailInput.value);
});
