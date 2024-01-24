var qoute = [
  {
    qoute: " The purpose of our lives is to be happy. ",
    auther: "Dalai Lama",
  },
  {
    qoute: "Life is what happens when you're busy making other plans.",
    auther: " John Lennon",
  },
  {
    qoute: "You only live once, but if you do it right, once is enough",
    auther: "Mae West",
  },
  {
    qoute: "Never let the fear of striking out keep you from playing the game.",
    auther: "Babe Ruth",
  },
  {
    qoute:
      "Money and success dont change people; they merely amplify what is already there",
    auther: "Will Smith",
  },
  {
    qoute:
      "Your time is limited, so dont waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    auther: "Steve Jobs",
  },
  {
    qoute: "In order to write about life first you must live it.",
    auther: "Ernest Hemingway",
  },
  {
    qoute:
      " big lesson in life, baby, is never be scared of anyone or anything.",
    auther: "Frank Sinatra",
  },
  {
    qoute: "The unexamined life is not worth living.",
    auther: "Socrates",
  },
  {
    qoute: "Turn your wounds into wisdom.",
    auther: "Oprah Winfrey",
  },
];

function newQoute() {
  var num = Math.floor(Math.random() * qoute.length);
  console.log(num);

  document.getElementById("Quote").innerHTML = qoute[num].qoute;

  document.getElementById("auther").innerHTML = qoute[num].auther;
}
