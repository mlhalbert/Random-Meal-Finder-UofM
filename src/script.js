
// variables for free dictionary random facts
// random fact display- will need to change after html
var fact = document.getElementById('display-fact')
// fact returned from api
var selectedFact= "";
// fact stored in local storage
var storedFact = [];
// search meal button
var searchButton = document.getElementById('search-btn');
//word added into api
//var wordFact = "";

// user supplied input
var userInput = document.getElementById('search-field');


function init(){
    console.log("We are starting")
}

init()

// the searchButton event Listener pushes random fact + meal history to local storage
searchButton.addEventListener('click', function(event){
    event.preventDefault();

    //random fact object
    var randomFact = {
       searchInput: userInput.value.trim(),
        };

//    var returnedFact = randomFact.word
    // console.log(randomFact)
    // storedFact.push(randomFact)
    // localStorage.setItem("facts:", JSON.stringify(storedFact))
    getFact();
    });

function getFact() {
    console.log("get fact function called")

    var requestUrl = 
    'https://api.dictionaryapi.dev/api/v2/entries/en/'+userInput.value

    fetch(requestUrl)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            console.log(data)

            var word = data[0]
            console.log(word)
            var definition = data[0].meanings[0].definitions[0].definition
            console.log(definition)

            // push data
            fact.innerHTML = definition;
            
        // create a paragraph element for every word and its definition
        // var dictionaryWord = document.createElement('p');
        // dictionaryWord.textContent = word;
        // fact.appendChild(dictionaryWord);

        })

}

mobiscroll.select('#multiple-group-select', {
    inputElement: document.getElementById('my-input'),
    touchUi: false
});

