document.addEventListener("DOMContentLoaded", function(){


const artifacts = [

{
title:"Forbidden Caps Lock",
icon:"⌨️",
preview:"Keyboard of chaos.",
core:"a key capable of transforming peaceful messages into unstoppable shouting"
},

{
title:"Ancient WiFi Password",
icon:"📡",
preview:"Mystery router code.",
core:"a sacred sequence of letters and numbers written beneath forgotten routers"
},

{
title:"1% Battery Screenshot",
icon:"🔋",
preview:"Proof of bravery.",
core:"evidence left by explorers who continued browsing with almost no power remaining"
},

{
title:"Infinite Terms & Conditions",
icon:"📜",
preview:"Never ending contract.",
core:"a legendary digital document that no human has ever completely read"
},

{
title:"The Legendary Buffering Circle",
icon:"⏳",
preview:"Endless loading ritual.",
core:"a spinning symbol believed to trap travelers between webpages"
}

];


const dramaticIntro = [

"Historians widely believe this artifact represents",
"Scholars from the ancient Internet Age describe this relic as",
"Archaeologists studying early digital ruins discovered this to be",
"Ancient forum scrolls describe this object as",
"Legends passed through early message boards suggest this was",
"Researchers of the Old Web concluded that this was"

];

const dramaticEnding = [

"and its influence shaped early online civilization.",
"a discovery that forever changed the habits of internet travelers.",
"an object surrounded by myth, confusion, and great respect.",
"a relic feared and admired by users of the early web.",
"one of the most misunderstood technologies of the digital age.",
"an invention whose true purpose is still debated today."

];


function generateDescription(coreText)
{

let intro =
dramaticIntro[Math.floor(Math.random()*dramaticIntro.length)];

let ending =
dramaticEnding[Math.floor(Math.random()*dramaticEnding.length)];

return intro + " " + coreText + ", " + ending;

}



const popupOverlay = document.getElementById("popupOverlay");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closePopup = document.getElementById("closePopup");


function attachCardClick(card)
{

card.addEventListener("click", function(){

let title = card.querySelector("h3").innerText;
let description = card.querySelector(".description").innerText;

popupTitle.innerText = title;
popupText.innerText = description;

popupOverlay.classList.add("active");

});

}



document.querySelectorAll(".artifact").forEach(card=>{
attachCardClick(card);
});


document.getElementById("randomBtn").onclick = function(){

let random =
artifacts[Math.floor(Math.random()*artifacts.length)];

let description =
generateDescription(random.core);

let card = document.createElement("div");

card.className = "artifact";

card.innerHTML = `

<div class="icon">${random.icon}</div>

<h3>${random.title}</h3>

<p class="preview">${random.preview}</p>

<div class="description">
${description}
</div>

`;

document.getElementById("gallery").appendChild(card);

attachCardClick(card);

};



closePopup.onclick=function(){
popupOverlay.classList.remove("active");
};

popupOverlay.addEventListener("click",function(e){

if(e.target===popupOverlay){
popupOverlay.classList.remove("active");
}

});



particlesJS("particles-js", {

particles: {

number:{value:80,density:{enable:true,value_area:800}},

color:{value:"#00eaff"},

shape:{type:"circle"},

opacity:{value:0.5},

size:{value:3,random:true},

line_linked:{
enable:true,
distance:150,
color:"#39FF14",
opacity:0.4,
width:1
},

move:{enable:true,speed:3}

},

interactivity:{

detect_on:"canvas",

events:{

onhover:{enable:true,mode:"repulse"},

onclick:{enable:true,mode:"push"},

resize:true

},

modes:{

repulse:{distance:100},

push:{particles_nb:10}

}

},

retina_detect:true

});

});