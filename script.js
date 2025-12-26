// -----------------------------
// Useless button
// -----------------------------

//DOM elements
const button = document.getElementById("theButton"); 
const counter = document.getElementById("counter"); 
const comments = document.getElementById("text-reaction"); 

//State
let count = 0; 

const stages = [
    {
        max: 5,
        messages: [
          "This button controls absolutely nothing.",
          "Still nothing happened.",
          "Relax. We're good."
        ]
      },
      {
        max: 15,
        messages: [
          "You clicked it again.",
          "Are you expecting something?",
          "Interesting choice."
        ]
      },
      {
        max: 30,
        messages: [
          "Please stop.",
          "This is getting concerning.",
          "We are monitoring the situation."
        ]
      },
      {
        max: Infinity,
        messages: [
          "You seem committed.",
          "At this point, why not?",
          "Still harmless. Probably."
        ]
    }
]; 

//Events
button.addEventListener("click", () => {
    count++; 
    counter.textContent = count; 
    comments.textContent = getMessage(count); 
}); 

//functions
function getMessage(count) {
    const stage = stages.find(s => count <= s.max); 

    const messages = stage.messages; 
    return messages[Math.floor(Math.random() * messages.length)]; 
}