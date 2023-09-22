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
const maxNumber = Math.ceil(targetHeight / divHeight);

for (let i = 2; i < maxNumber; i++) {
    const divClone = existingDiv.cloneNode(true); 
    divClone.textContent = i;
    container.appendChild(divClone);
}


