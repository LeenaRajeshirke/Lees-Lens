(function () {
  
  document.addEventListener("DOMContentLoaded", () => {
    try {
     
      const yearElement = document.getElementById("year");
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }

      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("links");

      if (menuToggle && navLinks) {
        
        menuToggle.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            menuToggle.click();
          }
        });

        menuToggle.addEventListener("click", () => {
          navLinks.classList.toggle("active");
          menuToggle.classList.toggle("open");

          if (navLinks.classList.contains("active")) {
            document.body.style.overflow = "hidden";
          } else {
            document.body.style.overflow = "";
          }
        });

        navLinks.addEventListener("click", (e) => {
          if (e.target.tagName === "A" && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("open");
            document.body.style.overflow = "";
          }
        });
      } 

      const blogTitleEl = document.getElementById("blog-title");
      const blogTextEl = document.getElementById("blog-text");
      const blogImgEl = document.getElementById("blog-img");

      if (blogTitleEl || blogTextEl || blogImgEl) {
       
        const blogs = {
          1: {
            title: "Life Long Learner Meetup — Confidence & Joy",
            text: `<p>That meetup changed everything for me. I learned to speak confidently...</p>`,
            img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop"
          },
          2: {
            title: "Sunrise on the Goan Coast",
            text: `<p>Waking up before sunrise and walking to the shore was magical...</p>`,
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
          },
          3: {
            title: "Helping Hands — A Street Food Share",
            text: `<p>During a rainy afternoon, I shared my sandwich with a vendor who had none...</p>`,
            img: "https://images.unsplash.com/photo-1526318472351-c75fcf070dd5?q=80&w=1200&auto=format&fit=crop"
          }
        };

        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");

        if (id && blogs[id]) {
          if (blogTitleEl) blogTitleEl.textContent = blogs[id].title;
          if (blogTextEl) blogTextEl.innerHTML = blogs[id].text;
          if (blogImgEl) blogImgEl.src = blogs[id].img;
        } else {
         
          const blogContainer = document.querySelector(".blog-container");
          if (blogContainer && (!blogTitleEl && !blogTextEl && !blogImgEl)) {
          } else if (blogContainer && (!id || !blogs[id])) {
            blogContainer.innerHTML = `<h2 style="padding:40px;text-align:center;">Blog not found!</h2>`;
          }
        }
      }

    } catch (err) {
      console.error("blog.js runtime error (caught):", err);
    }
  }); 
})();
