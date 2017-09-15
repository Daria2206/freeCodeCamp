/*
This is simple JS script that:
+ displays randomly selected quoted once the page is loaded,
+ allows a user to generate random quotes on button click,
+ allows a user to tweet out a quote.
*/

/*Func for generating a num in given range. The maximum is exclusive and the 
minimum is inclusive.*/
function pickQuoteNum(min, max) {
    "use strict";
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

/*Func that displays a new, randomly generated quote. Takes a number and the 
name of an array containing quotes (provided number is used as index to select 
a quote from the array of quotes). Recreates the twitter button to update the 
text of a tweet.*/
function displayNewQuote(quoteNum, quotes) { 
    "use strict";
    var oldQuote = document.getElementById("quoteText");
    var oldAuthor = document.getElementById("author");
    var oldTweet = document.getElementById("twitter");
    oldTweet.innerHTML = '';
    var newQuote = quotes[quoteNum][0]; 
    var newAuthor = quotes[quoteNum][1]; 
    var newTweet = newQuote + ' ' + newAuthor;
    twttr.widgets.createShareButton('/',document.getElementById('twitter'),
    {text: newTweet, size: 'large'});
    var checkSupport = oldQuote.textContent; 
    if (checkSupport !== undefined) {
        oldQuote.textContent = newQuote;
        oldAuthor.textContent = newAuthor;
    }
    else {
    oldQuote.innerText = newQuote;
    oldAuthor.innerText = newAuthor;
    }
}

var generator = function (event) {
    "use strict";
    var min = 0;
    var max = best.length;
    var quoteNum = pickQuoteNum(min, max);
    displayNewQuote(quoteNum, best);
};

if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", generator);
else if (document.attachEvent)
    document.attachEvent("onload", generator);

var quoteButton = document.getElementById("quoteGenerator");
if (quoteButton.addEventListener)
    quoteButton.addEventListener("click", generator);
else if (quoteButton.attachEvent)
    quoteButton.attachEvent("onclick", generator);

