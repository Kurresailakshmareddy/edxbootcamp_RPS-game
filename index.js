var userChoice=prompt("Input your choice of R=Rock, P=Paper, S=Sciccor");

var choices = ["R","P","S"];

var computerChoice = Math.floor(Math.random()* 3);

// const randomIndex  = Math.floor(Math.random()*3);

console.log("My choice: "+userChoice + "Computer choice: " + choices[computerChoice]);
