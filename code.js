// type animation
const dynamicText = document.querySelector(".des-info span");
const words = [
  "_front-end developer",
  "_react developer",
  "_software engineer",
  "_full stack developer",
];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typeEffect = () => {
  const currentWord = words[wordIdx];
  const currentChar = currentWord.substring(0, charIdx);
  dynamicText.textContent = currentChar;
  if (!isDeleting && charIdx < currentWord.length) {
    charIdx++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeEffect, 200);
  } else {
    isDeleting = !isDeleting;
    wordIdx = !isDeleting ? (wordIdx + 1) % words.length : wordIdx;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();

// fixed left
function updateLeftFixedDivs() {
  const heightS = document.querySelector(".container");
  const container = document.querySelector(".left-fixed");
  const existingDiv = document.querySelector(".left-fixed div");
  const computedStyle = getComputedStyle(existingDiv);
  const divHeight = parseFloat(computedStyle.height);
  const maxNumber = Math.ceil(heightS.offsetHeight / divHeight);

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 1; i < maxNumber; i++) {
    const divClone = existingDiv.cloneNode(true);
    divClone.textContent = i;
    container.appendChild(divClone);
  }
}

document.addEventListener("DOMContentLoaded", updateLeftFixedDivs);
window.addEventListener("resize", updateLeftFixedDivs);

// projects
var projectInfo = [
  {
    git: "https://github.com/Abir-Hasan-Al-amin/ChatApp-Reactjs",
    live: "https://chatapp-abir.netlify.app/",
    title: "ChatApp with FireBase -React.js",
    img: "img/chat.png",
  },
  {
    git: "https://github.com/Abir-Hasan-Al-amin/Weather-App",
    live: "https://weatherapp-abir.netlify.app/",
    title: "WeatherApp - React.js",
    img: "img/2.png",
  },
  {
    git: "https://github.com/Abir-Hasan-Al-amin/ToDo_App_FireBase",
    live: "https://abirtodoapp.netlify.app/",
    title: "TodoApp with FireBase",
    img: "img/todo.png",
  },
  {
    git: "https://github.com/Abir-Hasan-Al-amin/Password-Generator-And-Manager",
    live: "https://passwordmanagerandgenerator.netlify.app/",
    title: "Password Generator And Manager using Local Storage",
    img: "img/pass.png",
  },
  {
    git: "https://github.com/Abir-Hasan-Al-amin/Youtube-Landing_Page-Clone",
    live: "https://abir-hasan-al-amin.github.io/Youtube-Landing_Page-Clone/",
    title: "Youtube Landing Page",
    img: "img/you-clone.png",
  },
  {
    git: "https://github.com/Abir-Hasan-Al-amin/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--",
    live: "https://abir-hasan-al-amin.github.io/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--/",
    title: "Bangladesh-Gallery",
    img: "img/bd.png",
  },
];
let pro = "";
const projectContainer = document.querySelector(".projects-info");
projectInfo.forEach((p) => {
  pro += `<section class="p-main">
        <section class="p-info">
        <section class="p-img">
            <img src="${p.img}" alt="image">
        </section>
        <section class="p-content">
            <section class="p-title">{ ${p.title} }</section>
            <section class="p-bottom">
            <!-- <section class="p-des">${p.des}</section> -->
                <section class="p-button">
                    <a href="${p.live}" target="_blank"><button class="p-live">_Live Demo</button></a>
                    <a href="${p.git}" target="_blank"><button class="p-git"> _GitHub</button></a>
                </section>
            </section>
        </section>
    </section>
        </section>`;
});
projectContainer.innerHTML = pro;

// contact email
const submitForm = document.getElementById("f-button");
const nameF = document.getElementById("name");
const emailF = document.getElementById("email");
const subF = document.getElementById("sub");
const textF = document.getElementById("text");
const errorF = document.querySelectorAll("#error");
let nameV = /^([a-zA-Z])/;
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  let a = 0;
  e.preventDefault();
  if (!nameV.test(nameF.value)) {
    errorF[0].textContent = "Please use alphabet as first char";
    a++;
  } else {
    errorF[0].textContent = "";
  }
  if (!nameV.test(subF.value)) {
    errorF[1].textContent = "Please use alphabet as first char";
    a++;
  } else {
    errorF[1].textContent = "";
  }
  if (textF.value.trim() == "") {
    errorF[2].textContent = "Please write something";
    a++;
  } else {
    errorF[2].textContent = "";
  }
  if (a === 0) {
    const body = `Name: ${nameF.value}.<br/> Email: ${emailF.value}.<br/> Message: ${textF.value}`;
    Email.send({
      SecureToken: "fbd23097-2004-4d16-ac5d-b2459f4a1bf2",
      To: "darkshadowbd1999@gmail.com",
      From: "darkshadowbd1999@gmail.com",
      Subject: subF.value,
      Body: body,
    }).then((message) => {
      if (message == "OK") {
        swal("Successful", "Email Sent", "success");
      } else {
        swal("Something Went Wrong", "Email Not Sent", "error");
      }
      nameF.value = "";
      subF.value = "";
      emailF.value = "";
      textF.value = "";
    });
  }
});
// slide menu
const homeF = document.getElementById("home-f");
const menu = document.getElementById("menu");
const navC = document.querySelectorAll("#nav-c");
menu.addEventListener("click", (e) => {
  e.preventDefault();
  homeF.classList.toggle("active");
  menu.classList.toggle("active");
});
navC.forEach((nav) => {
  nav.addEventListener("click", () => {
    homeF.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

// smooth scrolling
const homeSection = document.querySelector(".home");
const aboutSection = document.querySelector(".about");
const projectSection = document.querySelector(".projects");
const skillSection = document.querySelector(".skills");
const resumeSection = document.querySelector(".resume");
const contactSection = document.querySelector(".contact");
document.querySelector(".homeSection").addEventListener("click", () => {
  homeSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".aboutSection").addEventListener("click", () => {
  aboutSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".projectSection").addEventListener("click", () => {
  projectSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".skillSection").addEventListener("click", () => {
  skillSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".resumeSection").addEventListener("click", () => {
  resumeSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".contactSection").addEventListener("click", () => {
  contactSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

document.querySelector(".aB").addEventListener("click", () => {
  aboutSection.scrollIntoView({ block: "start", behavior: "smooth" });
});

// active page
const aNavs = document.querySelectorAll(".aNav");
const sections = document.querySelectorAll("#section");
let cSection = null;
window.addEventListener('scroll', () => {
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 200) {
      cSection = sec.className;
    }
  });
  aNavs.forEach((aNav) => {
    if (aNav.href.includes(cSection)) {
      document.querySelector(".activa").classList.remove('activa');
      aNav.classList.add("activa");
    }
  });
});
