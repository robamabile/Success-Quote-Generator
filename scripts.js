const quotes = [
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential.",
        author: "John Maxwell"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.",
        author: "Jim Rohn"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Success is not how high you have climbed, but how you make a positive difference to the world.",
        author: "Roy T. Bennett"
    }
];

const quoteBox = document.getElementById("quote-box");
const quote = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function updateQuote() {
    const randomQuote = getRandomQuote();
    quote.innerHTML = `"${randomQuote.quote}" - ${randomQuote.author}`;
}

newQuoteBtn.addEventListener("click", updateQuote);

updateQuote();
