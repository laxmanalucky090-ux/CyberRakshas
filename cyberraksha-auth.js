// Fake login without Firebase
window.sendOTP = function() {
    const email = document.getElementById("email").value;
    if (!email) {
        alert("Please enter email");
        return;
    }
    localStorage.setItem("demoEmail", email);
    alert("OTP sent! (Use 123456 to login for demo)");
};

window.verifyOTP = function() {
    const otp = document.getElementById("otp").value;
    if (otp === "123456") {
        alert("Login successful!");
        window.location.href = "community.html"; // redirect to community
    } else {
        alert("Invalid OTP! Use 123456 for demo");
    }
};