document.getElementById("year").textContent = new Date().getFullYear();

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

  const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });