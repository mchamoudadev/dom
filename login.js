const username = document.querySelector("#username");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function (e) {

    if (username.value === "hamuuda") {
        // redirect
        window.location.href = "/main.html";
    } else {
        alert("Please enter valid username");
    }

});