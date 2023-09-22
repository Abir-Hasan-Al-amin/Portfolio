// type animation
const dynamicText = document.querySelector(".des-info span");
const words =["_front-end developer","_full stack developer","_software engineer"];
let wordIdx = 0 ;
let charIdx = 0;
let isDeleting = false;
const typeEffect = () =>{
    const currentWord = words[wordIdx];
    const currentChar = currentWord.substring(0,charIdx);
    dynamicText.textContent = currentChar;
    if(!isDeleting && charIdx<currentWord.length){
        charIdx++;
        setTimeout(typeEffect,200);
    }else if(isDeleting && charIdx > 0){
        charIdx--;
        setTimeout(typeEffect,200);
    }else{
        isDeleting = !isDeleting;
        wordIdx = !isDeleting? (wordIdx + 1) % words.length : wordIdx;
        setTimeout(typeEffect,1200);
    }
}
typeEffect();

// fixed left
const container = document.querySelector(".left-fixed");
const existingDiv = document.querySelector(".left-fixed div");
const targetHeight = container.clientHeight;
const divHeight = existingDiv.clientHeight;
const maxNumber = Math.ceil((targetHeight + 4000)  / divHeight);

for (let i = 2; i < maxNumber; i++) {
    const divClone = existingDiv.cloneNode(true); 
    divClone.textContent = i;
    container.appendChild(divClone);
}

// projects
var projectInfo=[
{git:"https://github.com/Abir-Hasan-Al-amin/Usabilityhub.com---Clone",live:"https://abir-hasan-al-amin.github.io/Usabilityhub.com---Clone/",title:"Usabilityhub.com",des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/us-clone.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Youtube-Landing_Page-Clone",live:"https://abir-hasan-al-amin.github.io/Youtube-Landing_Page-Clone/",title:"Youtube Landing Page", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/you-clone.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/JavaScript-Form-Validation",live:"https://abir-hasan-al-amin.github.io/JavaScript-Form-Validation/",title:"JavaScript Form Validation", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/Form.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--",live:"https://abir-hasan-al-amin.github.io/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--/",title:"Bangladesh-Gallery", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/bd.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Tic-tac-toe",live:"https://abir-hasan-al-amin.github.io/Tic-tac-toe/",title:"Tic-tac-toe", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/tic.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/News-Website",live:"#",title:"News Website", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/0.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Basic-Calculator--Html---Css---JS-",live:"https://abir-hasan-al-amin.github.io/Basic-Calculator--Html---Css---JS-/",title:"Calculator", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/calculator.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Insta-story-feature",live:"https://abir-hasan-al-amin.github.io/Insta-story-feature/",title:"Insta story feature", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/insta-story.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Counter-App",live:"https://abir-hasan-al-amin.github.io/Counter-App/",title:"Counter", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/counter.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Facebook-Friend-Request-Card",live:"https://abir-hasan-al-amin.github.io/Facebook-Friend-Request-Card/",title:"Friend Request Card", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"/img/facbook-card.png"},
];
    let pro="";
    const projectContainer= document.querySelector('.projects-info');
    projectInfo.forEach(p => {
        pro+=`<section class="p-info">
        <section class="p-img">
            <a href="${p.live}"><img src="${p.img}" alt="image"></a>
        </section>
        <section class="p-title"><a href="${p.git}">{ ${p.title} }</a></section>
        <section class="p-des">${p.des}</section>
    </section>`
    });
    projectContainer.innerHTML = pro;
