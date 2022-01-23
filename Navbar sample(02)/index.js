const highlighter=document.createElement("div");
const nav=document.querySelector("nav");
const arrow=document.createElement("div");

nav.appendChild(highlighter);
nav.appendChild(arrow);

highlighter.classList.add("highlighter");
arrow.classList.add("arrow");

const a1=document.getElementById("home");
const a2=document.getElementById("service");
const a3=document.getElementById("work");
const a4=document.getElementById("about");
const a5=document.getElementById("contact");

a1.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(-28vw)"
    arrow.style.transform="translateX(-28vw)"
    a1.style.color="red";
    a2.style.color="black";
    a3.style.color="black";
    a4.style.color="black";
    a5.style.color="black";
})
a2.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(-14vw)"
    arrow.style.transform="translateX(-14vw)"
    a1.style.color="black";
    a2.style.color="red";
    a3.style.color="black";
    a4.style.color="black";
    a5.style.color="black";
})
a3.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(0)"
    arrow.style.transform="translateX(0)"
    a1.style.color="black";
    a2.style.color="black";
    a3.style.color="red";
    a4.style.color="black";
    a5.style.color="black";
})
a4.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(14vw)"
    arrow.style.transform="translateX(14vw)"
    a1.style.color="black";
    a2.style.color="black";
    a3.style.color="black";
    a4.style.color="red";
    a5.style.color="black";
})
a5.addEventListener("mouseover",()=>{
    highlighter.style.transform="translateX(28vw)";
    arrow.style.transform="translateX(28vw)"
    a1.style.color="black";
    a2.style.color="black";
    a3.style.color="black";
    a4.style.color="black";
    a5.style.color="red";
})
