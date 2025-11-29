// Buttons on index page
const selarBtn = document.getElementById("selarBtn");
const ebookBtn = document.getElementById("ebookBtn");

if (selarBtn) {
    selarBtn.onclick = function () {
        window.location.href = "https://selar.com/a1q1sp1x6z";
    };
}

if (ebookBtn) {
    ebookBtn.onclick = function () {
        window.location.href = "ebook.html";
    };
}

// POPUP FOR PAYMENT PROOF
const proofUpload = document.getElementById("proofUpload");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

if (proofUpload) {
    proofUpload.addEventListener("change", function() {
        if (this.files.length > 0) {
            popup.style.display = "flex";
        }
    });
}

if (closePopup) {
    closePopup.onclick = function() {
        popup.style.display = "none";
    };
}

// ----- SCROLL REVEAL ANIMATIONS -----
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));


