// Update year
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

//Create post
document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();
  const image = document.getElementById("image").value.trim();

  if (!title || !content || !image) {
    alert("Please fill all fields before publishing.");
    return;
  }

  const newPost = {
    title,
    content,
    image,
    date: new Date().toLocaleDateString()
  };

  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(newPost);
  localStorage.setItem("posts", JSON.stringify(posts));

  alert("✨ Blog published successfully!");
  this.reset();
});

// Menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
