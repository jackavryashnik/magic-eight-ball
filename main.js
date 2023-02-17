// const userQuestion = 'Will I become a werwolf tonight? ';




const points = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
"Better not tell you now",
"Ask again later",
"Cannot predict now",
"Concentrate and ask again",
"Don’t count on it",
"Outlook not so good",
"My sources say no",
"Very doubtful",
"My reply is no"
];
document.getElementById("response").innerHTML = points;  

function myFunction() {
points.sort(function(a, b){return 0.5 - Math.random()});
document.getElementById("response").innerHTML = points[0];
document.getElementById("response").style.fontSize="18px";
setTimeout(timeup, 4000);

function timeup(){
  document.getElementById("response").innerHTML="8";
  document.getElementById("response").style.fontSize="120px";
  document.getElementById("clear").value="";

}
}


document.querySelector("enterName").onclick = myClick;

function myClick() {
  let howToCallUser = document.querySelector("nameInput").value;
  console.log(howToCallUser);
  howToCallUser
    ? (document.querySelector(
        "nameOutput"
      ).innerHTML = `Hello, ${howToCallUser}!`)
    : (document.querySelector("nameOutput").innerHTML = `Hello!`);
}


// let randomNumber = Math.floor(Math.random() * 8);
// let eightBall;

// switch (randomNumber) {
//   case 0:
//     eightBall = "Signs point to yes";
//     break;
//   case 1:
//     eightBall = "It is certain";
//     break;
//   case 2:
//     eightBall = "It is decidedly so";
//     break;
//   case 3:
//     eightBall = "Reply hazy try again";
//     break;
//   case 4:
//     eightBall = "Cannot predict now";
//     break;
//   case 5:
//     eightBall = "Do not count on it";
//     break;
//   case 6:
//     eightBall = "My sources say no";
//     break;
//   case 7:
//     eightBall = "Outlook not so good";
//     break;
// };

// console.log(eightBall);

// document.getElementById("response").innerHTML = eightBall;

// function myFunction() {
//   document.getElementById("response").innerHTML = eightBall;
//   document.getElementById("response").style.fontSize = "18px";
//   setTimeout(timeup, 4000);

//   function timeup() {
//     document.getElementById("response").innertHTML = "8";
//     document.getElementById("response").style.fontSize = "120px";
//     document.getElementById("clear").value = "";
//   }
// }

// console.log(`The magic ball says: ${eightBall}`);
// console.log(`The ${howToCallUser} asked: ${userQuestion}`);
// userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);
