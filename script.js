// ===============================
// Premium E-Commerce Website JS
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Navbar Shadow on Scroll
    // ===============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });

    // ===============================
    // Smooth Scroll
    // ===============================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ===============================
    // Scroll To Top Button
    // ===============================

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "top-btn";

    document.body.appendChild(topButton);

    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            topButton.style.display = "flex";

        } else {

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ===============================
    // Newsletter Validation
    // ===============================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const email = form.querySelector("input");

            if (email.value.trim() === "") {

                alert("Please enter your email address.");

                return;

            }

            alert("Thank you for subscribing!");

            form.reset();

        });

    }

    // ===============================
    // Product Button Animation
    // ===============================

    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.innerHTML = "✔ Added";

            this.classList.remove("btn-dark");

            this.classList.add("btn-success");

            setTimeout(() => {

                this.innerHTML = "Add to Cart";

                this.classList.remove("btn-success");

                this.classList.add("btn-dark");

            }, 2000);

        });

    });

    // ===============================
    // Reveal Animation
    // ===============================

    const revealElements = document.querySelectorAll(

        ".category-card, .product-card, .card"

    );

    function reveal() {

        revealElements.forEach(element => {

            const top = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if (top < windowHeight - 80) {

                element.style.opacity = "1";

                element.style.transform = "translateY(0)";

            }

        });

    }

    revealElements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform = "translateY(40px)";

        element.style.transition = "all .8s ease";

    });

    window.addEventListener("scroll", reveal);

    reveal();

    // ===============================
    // Active Navigation Link
    // ===============================

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    // ===============================
    // Loading Animation
    // ===============================

   window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .7s ease";

        document.body.style.opacity = "1";

    }, 100);

});

const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        alert("Search feature coming soon!");
    });
}

const wishlistBtn = document.querySelector(".wishlist-btn");

if (wishlistBtn) {
    wishlistBtn.addEventListener("click", function () {
        alert("Wishlist feature coming soon!");
    });
}

const cartBtn = document.querySelector(".cart-btn");

if (cartBtn) {
    cartBtn.addEventListener("click", function () {
        alert("Your cart has 2 items.");
    });
}

const loginBtn = document.querySelector(".login-btn");

if (loginBtn) {
    loginBtn.addEventListener("click", function () {
        alert("Login page coming soon!");
    });
}


});
// ================= LOGIN MODAL =================

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}

function loginUser(event) {

    event.preventDefault();

    const name = document.getElementById("loginName").value;
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    alert("Sign In successful!");

    closeLogin();
}

document.getElementById("loginModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLogin();
    }

});