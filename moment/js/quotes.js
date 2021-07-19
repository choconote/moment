const quotes = [
    {
        quote:"Life is just a bowl of pits",
        author:"Rodney Dangerfield",
    },
    {
        quote: "The journey is the reward",
        author:"Steve Jobs",
    },
    {
        quote: "Silence is more musical than any song.",
        author:"펄 벅",
    },
    {
        quote: "Paradise is where I am..",
        author:"Voltaire",
    },
    {
        quote: "Hope is necessary in every condition.",
        author:"Samuel Johnson",
    },
    {
        quote: "To accomplish great things, we must dream as well as act",
        author:"Anatole France",
    },
    {
        quote: "Have no friends not equal to yourself.",
        author:"Confucius",
    },
    {
        quote: "It's not that I'm so smart , it's just that I stay with problems longer.",
        author:"Albert Einstein",
    },
    {
        quote: "Study the past if you would define the future.",
        author:"Confucius",
    },
    {
        quote: "He who can, does. He who cannot, teaches.",
        author:"George Bernard Shaw",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


