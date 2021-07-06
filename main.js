// quote randomizer
let quotesArr = document.getElementsByClassName("quote");
let quoteButton = document.getElementById("quote-button");
quoteButton.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotesArr.length);
  let newQuoteElement = document.createElement("div");
  newQuoteElement.style.textAlign = "center";
  let newQuote = document.createElement("p");
  let quoteAuthor = document.createElement("p");
  newQuote.textContent = quotesArr[random].textContent;
  newQuote.style.fontStyle = "italic";
  quoteAuthor.textContent =
    quotesArr[random].parentElement.parentElement.children[0].textContent;
  let oldItem = document.getElementById("Quote").children[3];
  newQuoteElement.appendChild(newQuote);
  newQuoteElement.appendChild(quoteAuthor);
  document.getElementById("Quote").replaceChild(newQuoteElement, oldItem);
});
