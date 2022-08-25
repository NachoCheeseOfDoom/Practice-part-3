// 1. let & const
// // SETTING THE STAGE
// const player = "Per"
// const opponent = "Nick"
// const game = "AmazingFighter"

// let points = 0
// let hasWon = false

// // PLAYING THE GAME
// points += 100
// hasWon = true

// // ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`${player} got ${points} points and won the ${game} game!`)
// } else {
//   console.log(`The winner is ${opponent}! ${player} lost the game.`)
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes
//-----------------------------------------------------------------------------------------

// 2. log out items in an array
// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
// let perosn = ["ignacio", "diaz", 23]
// function logItems(course) {
//   for (let i = 0; i < course.length; i++) {
//     console.log(course[i]);
//   }
// }
// // Create a function that takes a single parameter, an array,
// // and logs all the items of the array to the console.
// // Call the function while passing in myCourses as an argument
// logItems(myCourses);
//-----------------------------------------------------------------------------------------

// 3. save to localStorage
/* HTML CODE:
    <h2>Saving to localStorage</h2>
*/
/* CSS CODE:
    body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-align: center;
  background: whitesmoke;
  color: darkgreen;
}
*/
// // Save a value to localStorage
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out

//   const randomVar = "This is going into the localStorage"
//   localStorage.setItem("random", randomVar);

// console.log(localStorage.getItem("random"));
//-----------------------------------------------------------------------------------------

// 4. addEventListener and object in arry

/*
  HTML CODE:
    <button id="score-btn">LOG JANE'S SCORE!</button>
*/
/*
  CSS CODE:
  body {
    text-align: center;
    background: whitesmoke;
    color: darkgreen;
    padding: 20px 0;
}

button {
    background: lightcoral;
    padding: 10px 16px;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;
}*/
// let data = [
//   {
//     player: "Jane",
//     score: 52
//   },
//   {
//     player: "Mark",
//     score: 41
//   }
// ]
// let scoreBtn = document.getElementById("score-btn");

// scoreBtn.addEventListener("click", function () {
//   console.log(data[0].score)
// });
// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)
//-----------------------------------------------------------------------------------------

// 5. Generate sentence
// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2: If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge

//----------------------------------------------------------
// const largestCountires = "The 3 largest countries are";
// const countries = [["China", " India", " USA"]];
// const bestFruits = "The 2 best fruits are";
// const fruits = [["Apples", " Bananas"]];
// function generateSentence(desc, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${desc} ${arr[i]}`)
//   }
// }
// generateSentence(bestFruits, fruits)
//My solution *Wrong*
//----------------------------------------------------------
// function generateSentence(desc, arr) {
//   let baseString = `The ${arr.length} ${desc} are `
//   const lastIndex = arr.length - 1
//   for (let i = 0; i < arr.length; i++) {
//     if (i === lastIndex) {
//       baseString += arr[i] + "."
//     } else {
//       baseString += arr[i] + ", "
//     }
//   }
//   return baseString
// }

// const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
// console.log(sentence)

//-----------------------------------------------------------------------------------------

// 6.Render images
// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

// /* HTML CODE:
// <h1>The Brooklyn Agency</h1>
//     <div id="container">
//       <!-- <img class="team-img" src="images/hip1.jpg" />
//       <img class="team-img" src="images/hip2.jpg" />
//       <img class="team-img" src="images/hip3.jpg" /> -->
//     </div>*/

// /* CSS CODE: body {
//   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//   background: whitesmoke;
//   text-align: center;
//   color: #130e0f;
// }

// h1 {
//   font-weight: 200;
//   letter-spacing: 2px;
// }

// #container {
//   width: 100%;
// }

// .team-img {
//   width: 100px;
//   border-radius: 100%;
//   margin: 10px;
// }*/
// const imgs = [
//   "images/hip1.jpg",
//   "images/hip2.jpg",
//   "images/hip3.jpg",
//   "images/banner3.png"
// ]
// const containerEl = document.getElementById("container");

// function renderImg() {
//   let imgsDom = "";
//   for (let i = 0; i < imgs.length; i++) {
//     imgsDom += `<img alt='Wallpaper' class='team-img' src='${imgs[i]}' > `
//   }
//   containerEl.innerHTML = imgsDom;
// }

// renderImg();
//-----------------------------------------------------------------------------------------

// 7. Rounding numbers

/*HTML CODE:
    <button id="purchase-btn"></button>
*/

/*CSS CODE:
html, body {
  margin: 0;
  padding: 10px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button {
  border: none;
  border-radius: 200px;
  padding: 15px 30px;
  font-weight: bold;
  cursor: pointer;
  background: #fc807f;
  color: white;
}*/

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = 420.69235632455
// const btn = document.getElementById("purchase-btn")
// btn.textContent = `Buy €${totalPrice.toFixed(2)}`
//-----------------------------------------------------------------------------------------

// 8. Convert string to number challenge

// Challenge:
// The toFixed() method doesn't work anymore. Can you make it work?
// Google the error message if you're unsure about how to do it

const totalPrice = "420.69235632455"
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`


//-----------------------------------------------------------------------------------------
