//1. JavaScript Basics & Setup
console.log("Welcome to Community Portal");
window.onload = function(){
    alert("Page Loaded");
};


//2. Syntax, Data Types, and Operators 
const eventName = "Tech Meetup";
const eventDate = "2025-06-10";
let seats = 3;

//3. Conditionals, Loops, and Error Handling 
try{
    if(seats < 0) throw "No Seats";
}
catch(error){
    console.log(error);
}


//4. Functions, Scope, Closures, Higher-Order Functions 
function addEvent(name){
    console.log(name);
}
function registerUser(name){
    console.log(name);
}


//5. Objects and Prototypes
class Event{
    constructor(title,seats){
        this.title=title;
        this.seats=seats;
    }
}
Event.prototype.checkAvailability=function(){
    return this.seats>0;
};


//6. Arrays and Methods
let events=[
    "Music Show",
    "Workshop"
];
events.push("Tech Meetup");
events.filter(e=>e.includes("Music"));
events.map(e=>"Event : "+e);


//7. DOM Manipulation
let container=document.querySelector("#events");
let card=document.createElement("div");
card.textContent="Tech Meetup";
container.append(card);


//8. Event Handling 
document.querySelector("#registerBtn").onclick=function(){
    if(seats==0) alert("Event closed");
    else{
    alert("Registered");
    alert("Available Seats: "+seats);
    seats--;
    alert("After Registration: "+seats);
    }
};


//9. Async JS, Promises, Async/Await 
fetch("events.json")
.then(r=>r.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));


//10. Modern JavaScript Features
const event={
    title:"Tech Meetup",
    city:"NY"
};
const {title,city}=event;
let copy=[...events];


//11. Working with Forms 
document.getElementById("regForm").addEventListener("submit",
    function(event){
    event.preventDefault();
    let name=this.elements["name"].value;
    console.log(name);
});


//12. AJAX & Fetch API
fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    body:JSON.stringify({
    name:"Alice"
    }),
    headers:{
    "Content-Type":"application/json"
    }
});


//13. Debugging and Testing 
console.log("Debugging");
debugger;


//14. jQuery and JS Frameworks 
$('#registerBtn').click(function(){
    alert("Registered");
});
$('#eventCard').fadeIn();
$('#eventCard').fadeOut();
//Benefit of React/Vue
//React and Vue provide reusable components and efficient state management, making large applications easier to develop and maintain.