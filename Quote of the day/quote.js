var arrayOfQuotes = [
    {
        "author" : "Jim Rohn",
        "quote" : "'Beware of what you become in pursuit of what you want.' "
    },
    {
        "author" : "Epictetus ",
        "quote" : "'It's not what happens to you, but how you react to it that matters.' "
    },
    {
        "author" : "Frank Sinatra ",
        "quote" : "'The best revenge is massive success.'"
    },
    {
        "author" : "Terry Pratchett ",
        "quote" : "'The first draft is just you telling yourself the story.'"
    },
    {
        "author" : " Louis L’Amour",
        "quote" : "'Start writing, no matter what. The water does not flow until the faucet is turned on.' "
    },
    {
        "author" : "William Faulkner ",
        "quote" : "'Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.' "
    },
    {
        "author" : "Octavia E. Butler ",
        "quote" : " 'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.'"
    },
    {
        "author" : " Jack London",
        "quote" : "'You can’t wait for inspiration. You have to go after it with a club.' "
    },
    {
        "author" : "Toni Morrison",
        "quote" : "'If there's a book that you want to read, but it hasn't been written yet, then you must write it.'",
    },
    {
        "author" : "Samuel Johnson",
        "quote" : "'The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book.'",
    },
    {
        "author" : "Herman Melville",
        "quote" : "'To produce a mighty book, you must choose a mighty theme.'",
    }
]

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML =  "" + arrayOfQuotes[randomNumber].quote + "";
    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author + "";
}