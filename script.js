// ================= AOS =================
AOS.init({
  duration: 1000,
  once: true
});

// ================= EMAILJS INIT =================
(function () {
  emailjs.init("hJg1gCumOvOJ-BGQk");
})();


// ================= DOM LOADED =================
document.addEventListener("DOMContentLoaded", function () {

  // ================= FORM =================
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  if (successMsg) successMsg.style.display = "none";

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      successMsg.style.display = "none";

      emailjs.sendForm("service_1tiokfh", "template_iegpf1k", this)
        .then(() => {

          // ✅ Auto reply
          emailjs.send("service_1tiokfh", "template_fz2lsyj", {
            name: form.name.value,
            email: form.email.value
          });

          // ✅ Show success message AFTER sending
          successMsg.style.display = "block";
          form.reset();

          setTimeout(() => {
            successMsg.style.display = "none";
          }, 3000);

        })
        .catch((error) => {
          console.log(error);
          alert("❌ Failed to send message");
        });
    });
  }


  // ================= TYPING EFFECT =================
  const texts = ["Web Developer", "Website Enthusiast", "Java Programmer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const el = document.querySelector(".typing");
    if (!el) return;

    const current = texts[textIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex--);
    } else {
      el.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
      speed = 1200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      speed = 500;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();


  // ================= BACKGROUND PARTICLES (FULL WEBSITE) =================
  const bg = document.querySelector(".bg-animation");

  if (bg) {
    for (let i = 0; i < 35; i++) {
      let span = document.createElement("span");

      let size = Math.random() * 8 + 4;

      span.style.left = Math.random() * 100 + "vw";
      span.style.top = Math.random() * 100 + "vh";
      span.style.width = size + "px";
      span.style.height = size + "px";

      span.style.animationDuration = (15 + Math.random() * 20) + "s";
      span.style.animationDelay = Math.random() * 5 + "s";

      bg.appendChild(span);
    }
  }


  // ================= HOME PARTICLES =================
  const particleContainer = document.querySelector(".particles");

  if (particleContainer) {
    for (let i = 0; i < 20; i++) {
      let span = document.createElement("span");

      span.style.left = Math.random() * 100 + "%";
      span.style.width = span.style.height = (5 + Math.random() * 10) + "px";
      span.style.animationDuration = (8 + Math.random() * 10) + "s";

      particleContainer.appendChild(span);
    }
  }


  // ================= MOBILE MENU AUTO CLOSE =================
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const navbar = document.querySelector(".navbar-collapse");

      if (navbar.classList.contains("show")) {
        new bootstrap.Collapse(navbar).hide();
      }
    });
  });

});


// ================= SCROLL BUTTON =================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display =
      document.documentElement.scrollTop > 200 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ================= NAVBAR EFFECT =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(255,153,0,0.3)";
    navbar.classList.add("scrolled");
  } else {
    navbar.style.boxShadow = "none";
    navbar.classList.remove("scrolled");
  }
});