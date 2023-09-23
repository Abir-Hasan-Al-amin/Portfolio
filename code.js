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
            }
        );
    }
});
