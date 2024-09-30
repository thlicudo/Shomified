// NAVBAR BURGER FOR MOBILE

const hamburger = document.querySelector(".nav-burger");
const navMenu = document.querySelector(".nav-links");

const toggleMenu = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

const closeMenu = (event) => {
  if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
};

hamburger.addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenu);

navMenu.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// ENTRY EFFECT IN ABOUT PART

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".about-description, .about-heading, .intro-logo, .intro-friends-container, .item"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// FRIENDS PART IMG & INFO CHANGE

const friendsData = {
  ivan: {
    image: "images/friends/ivan.gif",
    name: "Ivan",
    role: "leader",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit reiciendis omnis fugiat consequatur rem deserunt dolor voluptas illum consequuntur ipsum impedit.",
  },
  shane: {
    image: "images/friends/shane.gif",
    name: "Shane",
    role: "Singer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit reiciendis omnis fugiat consequatur rem deserunt dolor voluptas illum consequuntur ipsum impedit.",
  },
  bim: {
    image: "images/friends/bim.gif",
    name: "Bim",
    role: "Singer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit reiciendis omnis fugiat consequatur rem deserunt dolor voluptas illum consequuntur ipsum impedit.",
  },
  cheng: {
    image: "images/friends/cheng.gif",
    name: "Cheng",
    role: "gym boy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit reiciendis omnis fugiat consequatur rem deserunt dolor voluptas illum consequuntur ipsum impedit.",
  },
  kuys: {
    image: "images/friends/kuys.gif",
    name: "Kuys",
    role: "vibrations",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam velit reiciendis omnis fugiat consequatur rem deserunt dolor voluptas illum consequuntur ipsum impedit.",
  },
};

const defaultFriend = friendsData.ivan;
document
  .querySelector(".friends-img-box img")
  .setAttribute("src", defaultFriend.image);
document.getElementById("friends-nickname").textContent = defaultFriend.name;
document.getElementById("friends-type").textContent = defaultFriend.role;
document.getElementById("friends-description").textContent =
  defaultFriend.description;

// Handle link clicks
document.querySelectorAll(".friends-avatar-box").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the friend ID from the data-id attribute
    const friendId = this.getAttribute("data-id");

    // Retrieve the friend data
    const friend = friendsData[friendId];

    // Update the main image and text content
    document
      .querySelector(".friends-img-box img")
      .setAttribute("src", friend.image);
    document.getElementById("friends-nickname").textContent = friend.name;
    document.getElementById("friends-type").textContent = friend.role;
    document.getElementById("friends-description").textContent =
      friend.description;
  });
});
