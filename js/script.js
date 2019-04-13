/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
 * Process to load a new quote every 10 seconds automatically.
 */

var intervalID = window.setInterval(printQuote, 10000);

/***
 * Function to return a random quote from the quotes array
 * The quotes are stored in a separate File called quotes.js
 */

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length);
  //alert(randomNumber);
  console.log(quotes[randomNumber]);
  return quotes[randomNumber];
}
/***
  Function to generate a random background color for the website.
  It generates 3 random numbers between 1 and 255 and combines
  these values as the RGB color. 
  Source https://www.w3schools.com/jsref/prop_style_background.asp
***/
function randomBackground() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + r + "," + g + "," + b + ")";

  document.body.style.background = bgColor;
  }

/***
 * printQuote function to display a random quote from the quotes array 
 * on the website. The function checks if the quote has a citation, year & category
 * and if so these values will be displayed on the webpage. In addtion the randomBackground
 * Function will be called in order to change the background for each new quote.
 */

function printQuote() {
  var randomQuote = getRandomQuote();
  var htmlString = "";
  var div = document.getElementById('quote-box');
  htmlString += '<p class="quote">' + randomQuote.quotation + '</p>';
  htmlString += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation !== null && randomQuote.citation !== undefined){
    htmlString += '<span class="citation">'+ randomQuote.citation + '</span>';
  }

  if (randomQuote.year !== null && randomQuote.year !== undefined){
    htmlString += '<span class="year">'+ randomQuote.year + '</span>';
  }

  if (randomQuote.categorization !== null && randomQuote.categorization !== undefined){
    htmlString += '<span class="category">'+ randomQuote.categorization + '</span>';
  }

  htmlString += '</p>';
  div.innerHTML = htmlString;

  randomBackground();
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


