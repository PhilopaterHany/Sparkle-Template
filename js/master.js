// Scroll To Top Button
const btn = document.getElementById("to-top");
window.onscroll = () => {
    window.scrollY >= 500
        ? (btn.style.right = "20px")
        : (btn.style.right = "-1000px");
};
btn.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Menu Toggle
const burgerIcon = document.querySelector("header nav .menu");
const menu = document.querySelector("header .navigation");
burgerIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menu.classList.remove("show");
});

// Services Section Progress Bars
const skills = document.querySelector(
    ".services .container .content .skill .small"
);
const allSkills = document.querySelectorAll(
    ".services .container .content .skill .small span span"
);
window.addEventListener("scroll", () => {
    if (window.scrollY >= skills.offsetTop - 500) {
        allSkills.forEach((skill) => {
            skill.style.width = skill.dataset.prog;
        });
    } else {
        allSkills.forEach((skill) => {
            skill.style.width = "0";
        });
    }
});

// Numbers Section Counter
let started = false;
const counters = document.querySelector("section.nums");
const counterElements = document.querySelectorAll("section.nums .box h4");
function startCount(el) {
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == el.dataset.goal) clearInterval(count);
    }, 2000 / el.dataset.goal);
}
window.addEventListener("scroll", () => {
    if (window.scrollY >= counters.offsetTop - 300) {
        if (!started) {
            counterElements.forEach((num) => startCount(num));
        }
        started = true;
    }
});

// Portfolio Filter
const workBtns = document.querySelectorAll(".portfolio .content button");
const logoImg = document.querySelector(".portfolio .content > img");
const workImages = document.querySelectorAll(".portfolio .imgs .box img");
workImages.forEach((img) => {
    img.nextElementSibling.children[
        img.nextElementSibling.children.length - 1
    ].innerHTML = img.dataset.categ;
});
logoImg.addEventListener("click", () => {
    workImages.forEach((img) => {
        img.parentElement.style.display = "inline-block";
    });
});
workBtns.forEach((btn) => {
    btn.innerHTML = btn.dataset.categ;
    btn.addEventListener("click", () => {
        workBtns.forEach((btn) => {
            btn.classList.remove("active");
            workImages.forEach((img) => {
                img.parentElement.style.display = "none";
            });
        });
        document
            .querySelectorAll(`img[data-categ=${btn.dataset.categ}]`)
            .forEach((img) => {
                img.parentElement.style.display = "inline-block";
            });
        btn.classList.add("active");
    });
});

// Putting Year at Footer
document.querySelector("footer .year").innerHTML = new Date().getFullYear();
