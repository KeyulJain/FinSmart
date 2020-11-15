let log = document.getElementById("login");
let sigup = document.getElementById("signup");
let btn = document.getElementById("btn");

function signup() {
    log.style.left = "-400px";
    sigup.style.left = "50px";
    btn.style.left = "110px";
}

function login() {
    log.style.left = "50px";
    sigup.style.left = "450px";
    btn.style.left = "0";
}

document.getElementById("user-svg").addEventListener("click", function(){
    document.querySelector(".login").style.display="flex";
})

document.querySelector(".cross").addEventListener("click",function(){
    document.querySelector(".login").style.display="none";
})