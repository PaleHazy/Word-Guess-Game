// declaring preset words to guess
var words = ['senpai', 'tesla'];
//grabbing single words div
var singleWordsElement = document.getElementById('singleWords');
//declaring charachters array
var charachters = [];
//grabbing hangmanPic div 
var picture = document.getElementById('hangmanPic');
//declaring counter
var counter = 0;   
//declaring i
var i;
//creating random number to pick up from words array
var random = Math.floor(Math.random() * words.length);

//for loop  to push each charachter of selected word to a new array 
for (i = 0; i < words[random].length; i++) 
{
    charachters.push(words[random][i]);
    
}
//for loop creating a new divper each element of charachter array
for (i = 0; i < charachters.length; i ++)
{
    //new div
    var elementDiv = document.createElement('div');
    //new div2
    var elementSpan = document.createElement('div');
    //stiing class = "inside" to div
    elementDiv.setAttribute('class', 'inside');
    //setting id = "charchters[i]"
    elementSpan.setAttribute('id', `${charachters[i]}`)
    //appending div to singleWordsElement div
    singleWordsElement.appendChild(elementDiv);
    //append div2 to div
    elementDiv.appendChild(elementSpan);
    
    
}

        console.log(charachters);
        // array to store all guesses individually
        var guesses = [];
        //function ran everytime a user inputs on key board
        document.onkeyup = function(event) 
        {
            var j = 0;
            console.log(j)
            var userGuess = event.key;
            // console.log(document.getElementsById(userGuess));
            //text node to append to inner div2
            var nodeShit = document.createTextNode(userGuess);
            //getting interactive div by id to find 
            var spanEl = document.getElementById(userGuess);
           
            if (guesses != 0 && !charachters.includes(userGuess) && !guesses.includes(userGuess))
            {
                 var wrongGuesses = document.getElementById('WG');
                 var wrongDiv = document.createElement('div');
                 wrongDiv.setAttribute('class', 'wrongChar');
                 wrongDiv.setAttribute('id', userGuess);
                 wrongGuesses.appendChild(wrongDiv);
                 var wrongNode = document.createTextNode(userGuess)
                 wrongDiv.appendChild(wrongNode);
                 counter ++;
            }

            var pictureChange = document.getElementById('hangmanPic');
            pictureChange.setAttribute('src', `images/Guess_${counter}.jpg`)

            guesses.push(userGuess);
            guesses = [...new Set(guesses)];
            console.log(j, charachters);
            while (j < charachters.length)        
            {
                var charItem = charachters[j];
                var charIndex = charachters.indexOf(charItem);
                console.log(charItem, charIndex)
                
                    if (userGuess === charachters[charIndex] && !document.getElementById(userGuess).innerText)
                    {
                            spanEl.appendChild(nodeShit);
                            j = charachters.length;
                    }  
    
                    j++;
            }
            var z = 0;
            // while (z < guesses.length)
            // {
            //     if ()
            //     var wrongChar = document.createElement('div');
            //     wrongChar.setAttribute('id', `${guesses[z]}`);
            //     z ++;

            // }
            console.log('guesses '+ guesses);
            console.log('counter ' + counter);           
        }


