// update year
document.getElementById("year").textContent = new Date().getFullYear();

// menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// like button
let liked = false;
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

likeBtn.addEventListener("click", () => {
  liked = !liked;
  likeCount.textContent = liked ? 25 : 24;
});

// save button
document.getElementById("saveBtn").addEventListener("click", () => {
  alert("Saved to your journal!");
});
