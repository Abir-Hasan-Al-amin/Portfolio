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
document.addEventListener("DOMContentLoaded", function() {
let heightS=document.querySelector(".container");
const container = document.querySelector(".left-fixed");
const existingDiv = document.querySelector(".left-fixed div");
const computedStyle = getComputedStyle(existingDiv);
const divHeight = parseFloat(computedStyle.height);
const maxNumber = Math.ceil( heightS.offsetHeight  / divHeight);
for (let i = 2; i < maxNumber; i++) {
    const divClone = existingDiv.cloneNode(true); 
    divClone.textContent = i;
    container.appendChild(divClone);
}
});
// projects
var projectInfo=[
{git:"https://github.com/Abir-Hasan-Al-amin/ToDo_App_FireBase",live:"https://abirtodoapp.netlify.app/",title:"TodoApp with FireBase",des:"This Todo App is a cutting-edge task management solution that leverages Firebase's robust real-time database and authentication services. This integration ensures seamless real-time collaboration, secure user authentication, and optimal user experiences across diverse devices with its responsive design.",img:"img/todo.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Password-Generator-And-Manager",live:"https://passwordmanagerandgenerator.netlify.app/",title:"Password Generator And Manager using Local Storage", des:"This project offers a user-friendly password management solution with a robust password generation algorithm, empowering users to create strong and secure passwords effortlessly. Additionally, it features a password manager and local storage capabilities to ensure the safe storage and accessibility of user credentials.",img:"img/pass.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Usabilityhub.com---Clone",live:"https://abir-hasan-al-amin.github.io/Usabilityhub.com---Clone/",title:"Usabilityhub.com",des:"Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/us-clone.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Youtube-Landing_Page-Clone",live:"https://abir-hasan-al-amin.github.io/Youtube-Landing_Page-Clone/",title:"Youtube Landing Page", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/you-clone.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/JavaScript-Form-Validation",live:"https://abir-hasan-al-amin.github.io/JavaScript-Form-Validation/",title:"Form Validation", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/Form.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--",live:"https://abir-hasan-al-amin.github.io/Mini-Project---Bangladesh-Gallery-using-CSS-Grid--/",title:"Bangladesh-Gallery", des:"Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/bd.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Tic-tac-toe",live:"https://abir-hasan-al-amin.github.io/Tic-tac-toe/",title:"Tic-tac-toe", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/tic.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/News-Website",live:"#",title:"News Website", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/0.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Basic-Calculator--Html---Css---JS-",live:"https://abir-hasan-al-amin.github.io/Basic-Calculator--Html---Css---JS-/",title:"Calculator", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/calculator.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Insta-story-feature",live:"https://abir-hasan-al-amin.github.io/Insta-story-feature/",title:"Insta story feature", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/insta-story.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Counter-App",live:"https://abir-hasan-al-amin.github.io/Counter-App/",title:"Counter", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/counter.png"},
{git:"https://github.com/Abir-Hasan-Al-amin/Facebook-Friend-Request-Card",live:"https://abir-hasan-al-amin.github.io/Facebook-Friend-Request-Card/",title:"Friend Request Card", des:"Lorem ipsum dolor sit amet consectetur adipisicing elit",img:"img/facbook-card.png"},
];
    let pro="";
    const projectContainer= document.querySelector('.projects-info');
    projectInfo.forEach(p => {
        pro+=`<section class="p-main">
        <section class="p-info">
        <section class="p-img">
            <img src="${p.img}" alt="image">
        </section>
        <section class="p-content">
            <section class="p-title">{ ${p.title} }</section>
            <section class="p-bottom">
                <section class="p-des">${p.des}</section>
                <section class="p-button">
                    <a href="${p.live}" target="_blank"><button class="p-live">_Live Demo</button></a>
                    <a href="${p.git}" target="_blank"><button class="p-git"> _GitHub</button></a>
                </section>
            </section>
        </section>
    </section>
        </section>`
    });
    projectContainer.innerHTML = pro;

// contact email
const submitForm=document.getElementById("f-button");
const nameF=document.getElementById("name");
const emailF=document.getElementById("email");
const subF=document.getElementById("sub");
const textF=document.getElementById("text");
const errorF=document.querySelectorAll("#error");
let nameV= /^([a-zA-Z])/;
const form = document.getElementById("myForm");
form.addEventListener("submit",e=> {
    let a=0;
    e.preventDefault();
    if(!nameV.test(nameF.value)){
        errorF[0].textContent="Please use alphabet as first char";
        a++;
    }else{
        errorF[0].textContent="";
    }
    if(!nameV.test(subF.value)){
        errorF[1].textContent="Please use alphabet as first char";
        a++;
    }else{
        errorF[1].textContent="";
    }
    if(textF.value.trim()==""){
        errorF[2].textContent="Please write something";
        a++;
    }else{
        errorF[2].textContent="";
    }
    if(a===0){
        const body= `Name: ${nameF.value}.<br/> Email: ${emailF.value}.<br/> Message: ${textF.value}`;
        Email.send({
            SecureToken : "fbd23097-2004-4d16-ac5d-b2459f4a1bf2",
            To : 'darkshadowbd1999@gmail.com',
            From : "darkshadowbd1999@gmail.com",
            Subject : subF.value,
            Body : body
        }).then(
            message => {
                if(message=='OK'){
                    swal("Successful", "Email Sent", "success");
                }else{
                    swal("Something Went Wrong", "Email Not Sent", "error");
                }
                nameF.value=""
                subF.value="";
                emailF.value="";
                textF.value="";
            }
        );
    }
});
// slide menu
const homeF=document.getElementById("home-f");
const menu=document.getElementById("menu");
const navC=document.querySelectorAll("#nav-c");
menu.addEventListener('click',(e)=>{
    e.preventDefault();
    homeF.classList.toggle('active');
    menu.classList.toggle('active');
});
navC.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        homeF.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' 
            });
        }
    });
});

