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

document.getElementById("user-svg").addEventListener("click", function() {
    document.querySelector(".login").style.display = "flex";
})

document.querySelector(".cross").addEventListener("click", function() {
    document.querySelector(".login").style.display = "none";
})
class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);
// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;

function compoundInterest() {
    event.preventDefault();
    var principal = parseFloat(document.getElementById("principalCompound").value);
    var interestRate = parseFloat(document.getElementById("interestCompound").value);
    interestRate = interestRate / 100;
    var timesCompounded = parseFloat(document.getElementById("timesCompounded").value);
    var termOfLoan = parseFloat(document.getElementById("termCompound").value);
    var a = interestRate / timesCompounded;
    var b = 1 + a;
    var c = timesCompounded * termOfLoan;
    var d = Math.pow(b, c);
    var amount = (principal * d).toFixed(2);
    document.getElementById("ciOutput-01").innerHTML = "Interest: ₹" + (amount - principal).toFixed(2);
    document.getElementById("ciOutput-02").innerHTML = "Total plus interest: ₹" + amount;
}