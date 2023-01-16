// quote(명언), author(작가) *(변수 quotes)
const quotes = [
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "To enhoy the rain bow, first enjoy the rain.",
    author: "-Paulo Coelho-",
  },
  {
    quote: "When it rains look for rainbows, when it's dark look for stars.",
    author: "-Oscar Wilde-",
  },
  {
    quote: "Life is unfair, get used to it.",
    author: "-Bill Gates-",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "-Lilly Pulitzer-",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "-Walt Disney-",
  },
  {
    quote:
      "If you don't get out of the box you've been raised in, you won't understand how nuch bigger the world is.",
    author: "-Angelina Jolie-",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "-Theodore Roosevelt-",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You don't wnant to run out of gas on your trip, but you're not doing a tour of gas starions.",
    author: "-Tim O'Reilly",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "-Vidal Sassoon-",
  },
];

const quote = document.querySelector("#quote span:first-child"); // id quote 내부 첫번째 span 변수화 *(변수 quote)
const author = document.querySelector("#quote span:last-child"); // id quote 내부 두번째 span 변수화 * (변수 author)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // array의 max 갯수만큼 floor(내림)하여 random으로 max개의 명언 중 하나를 숫자로 선택 *(변수 todaysQuote)

quote.innerText = todaysQuote.quote; // 변수 quote 내부 text를 변수todaysQuote로 선택된 순서에 있는 quote(명언)로 변경
author.innerText = todaysQuote.author; // 변수 author 내부 text를 변수todaysQuote로 선택된 순서에 있는 author(작가)로 변경
