// Toggle
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};
// Scroll Section Active Link
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  //   Sticky navbar
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle and navbar
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// Download CV
function downloadPDF(pdfURL) {
  var downloadLink = document.createElement("a");
  downloadLink.href = pdfURL;
  downloadLink.download = "CV.pdf";

  downloadLink.click();
}

// scroll reveal
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, .contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content", {
  origin: "right",
});
// typed js
const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "PHP Developer", "Web Design"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Contact
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const subject = document.getElementById("subject");
const msg = document.getElementById("msg");
const submit = document.getElementsByClassName("form-contact")[0];

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  // Format
  let ebody = `
        <b>Full Name: </b>${fullName.value}
        <br>
        <b>Email Address: </b>${email.value}
        <br>
        <b>Mobile Number: </b>${mobile.value}
        <br>
        <b>Email Subject: </b>${subject.value}
        <br>
        <b>Message: </b>${msg.value}
    `;

  // Email code
  Email.send({
    SecureToken: "a46c5cd0-7c5b-4b70-9970-e20e7709fc5a",
    To: "rolandruiz126@gmail.com",
    From: "rolandruiz126@gmail.com",
    Subject: "New Email" + email.value,
    Body: ebody,
  }).then((message) => {
    alert(message);
    // Clear inputs and textarea
    fullName.value = "";
    email.value = "";
    mobile.value = "";
    subject.value = "";
    msg.value = "";
  });
});
