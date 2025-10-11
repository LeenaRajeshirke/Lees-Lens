// Blog data
const blogs = {
  1: {
    title: "Life Long Learner Meetup — Confidence & Joy",
    text: `<p>That meetup changed everything for me. I learned to speak confidently, engage with new people, and take small courageous steps. It was the first time I realized my potential to lead and inspire others.</p>
           <p>After the meetup, I traveled solo for the first time. I carried the lessons and courage with me everywhere. Every smile, every act of kindness, every sunset felt more meaningful.</p>`,
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop"
  },
  2: {
    title: "Sunrise on the Goan Coast",
    text: `<p>Waking up before sunrise and walking to the shore was magical. The gentle waves and colorful sky reminded me to pause and savor every moment.</p>
           <p>I wrote a small letter to my future self and promised to keep exploring, learning, and sharing happiness with others.</p>`,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
  },
  3: {
    title: "Helping Hands — A Street Food Share",
    text: `<p>During a rainy afternoon, I shared my sandwich with a vendor who had none. His smile lit up the day and reminded me how small acts of kindness can make a huge difference.</p>
           <p>Every trip after that, I made sure to carry small gestures of generosity. It's amazing how it changes both the giver and receiver.</p>`,
    img: "https://images.unsplash.com/photo-1526318472351-c75fcf070dd5?q=80&w=1200&auto=format&fit=crop"
  }
};

// Get blog ID from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Display blog
if (blogs[id]) {
  document.getElementById("blog-title").textContent = blogs[id].title;
  document.getElementById("blog-text").innerHTML = blogs[id].text;
  document.getElementById("blog-img").src = blogs[id].img;
} else {
  document.querySelector(".blog-container").innerHTML = `<h2 style="padding:40px;text-align:center;">Blog not found!</h2>`;
}
