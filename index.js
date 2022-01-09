// for player 1
let randomNumber1 = Math.random() * 6;  // randomNumber 0-5.999999
randomNumber1 = Math.floor(randomNumber1) + 1 ;  //  1-6
console.log(randomNumber1);


let diceImage1 = "Images/dice"+ randomNumber1 + ".png";  //Images/dice1.png - Images/dice6.png (location of the file as per random number)
document.querySelector(".img1").setAttribute("src", diceImage1);


// for player 2

let randomNumber2 = Math.random() * 6;  // randomNumber 0-5.999999
randomNumber2 = Math.floor(randomNumber2) + 1;  //  1-6
console.log(randomNumber2);

let diceImage2 = "Images/dice"+ randomNumber2 + ".png";   //Images/dice1.png - Images/dice6.png (location of the file as per random number)
document.querySelector(".img2").setAttribute("src", diceImage2);


// Who wins?

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";    //player1 Wins
}
else if (randomNumber2 > randomNumber1){

    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";  //player2 Wins
}
else{
    document.querySelector("h1").innerHTML = "Draw!";     //Draw
}



