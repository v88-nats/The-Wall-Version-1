$(document).ready(function() {
    $("body")
        .on("click", "#login_link", showSigninForm)
        .on("click", "#signup_link", showSignupForm)
        .on("submit", "#signup_form", signupForm)  
        .on("submit", "#signin_form", signinForm)
        .on("click", "input", focusInput);

});

function showSigninForm(event){
    event.preventDefault();
    $("#signup_container").hide();
    $("#signin_container").show();
}

function showSignupForm(event) {
    event.preventDefault();
    $("#signin_container").hide();
    $("#signup_container").show();
}

function signupForm(event) {
    event.preventDefault();

    let firstname = $("#firstname").val().trim();
    let lastname = $("#lastname").val().trim();
    let email = $(".email").val().trim();
    let password = $(".password").val().trim();

    $("input").removeClass("border-red");

    if (firstname === "") {
        $("#firstname").addClass("border-red");
    }
    if (lastname === "") {
        $("#lastname").addClass("border-red");
    }
    if (email === "") {
        $(".email").addClass("border-red");
    }
    if (password === "") {
        $(".password").addClass("border-red");
    }
    if (firstname === "Nathaniel" && lastname === "Nardo" && email === "nnardo@village88.com" &&    password === "123456") {
        window.location.assign("login.html");
    }
}

function signinForm(event) {
    event.preventDefault();

    let email = $(".email").val().trim();
    let password = $(".password").val().trim();

    $("input").removeClass("border-red");

    if (email === "") {
        $(".email").addClass("border-red");
    }
    if (password === "") {
        $(".password").addClass("border-red");
    }

    if (email === "nnardo@village88.com" && password === "123456") {
        window.location.assign("index.html");
    } else {
        alert("Please enter a valid email and password!");
    }
}