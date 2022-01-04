const quotes = [
    {
        quote: "SHAPE UP OR SHIP OUT",
        author: "ME",
    },
    {
        quote: "Keep going",
        author: "You",
    },
    { 
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
  {
    quote: "Never go on trips with anyone you do not love.",
    author: "Hemmingway",
  },
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;