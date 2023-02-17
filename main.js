// let userName = '';

// const userQuestion = 'Will I become a werwolf tonight? ';

// let randomNumber = Math.floor(Math.random() * 8);

// let eightBall = '';



document.querySelector('#enterName').onclick = myClick;

function myClick(){
    let howToCallUser = document.querySelector('.nameInput').value;
    console.log('work');
    document.querySelector('.nameOutput').innerHTML = howToCallUser;
}

// switch(randomNumber) {
//     case 0:
//     eightBall = 'Signs point to yes';
//     break;
//     case 1:
//     eightBall = 'It is certain';
//     break;
//     case 2:
//     eightBall = 'It is decidedly so';
//     break;
//     case 3:
//     eightBall = 'Reply hazy try again';
//     break;
//     case 4:
//     eightBall = 'Cannot predict now';
//     break;
//     case 5:
//     eightBall = 'Do not count on it';
//     break;
//     case 6:
//     eightBall = 'My sources say no';
//     break;
//     case 7:
//     eightBall = 'Outlook not so good';
//     break;
// };
// document.getElementById("response").innertHTML=eightBall;


// function myFunction(){
//     document.getElementById("response").innertHTML=eightBall;
//     document.getElementById("response").style.fontSize="18px";
//     setTimeout(timeup, 4000);

//     function timeup(){
//     document.getElementById("response").innertHTML="8";
//     document.getElementById("response").style.fontSize="120px";
//     document.getElementById("clear").value="";
//     }
// }

// console.log(`The magic ball says: ${eightBall}`);
// console.log(`The ${howToCallUser} asked: ${userQuestion}`);
// userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);