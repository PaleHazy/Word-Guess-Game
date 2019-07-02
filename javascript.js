var words = ['astaan', 'oompaan', 'tiijann'];
var singleWordsElement = document.getElementById('singleWords');
var charachters = [];
var picture = document.getElementById('hangmanPic');
var counter = 1;   
var i;
var random = Math.floor(Math.random() * words.length);


for (i = 0; i < words[random].length; i++) 
{
    charachters.push(words[random][i]);
    
}

for (i = 0; i < charachters.length; i ++)
{
    var elementDiv = document.createElement('div');
    var elementSpan = document.createElement('div');
    elementDiv.setAttribute('class', 'inside');
    elementSpan.setAttribute('id', `${charachters[i]}`)
    singleWordsElement.appendChild(elementDiv);
    elementDiv.appendChild(elementSpan);
    
    
}
        console.log(charachters);
        
        var guesses = [];
        document.onkeyup = function(event) 
        {
            var j = 0;
            console.log(j)
            var userGuess = event.key;
            var nodeShit = document.createTextNode(userGuess);
            var spanEl = document.getElementById(userGuess);
            guesses.push(userGuess);
            if (!charachters.includes(userGuess)) {
                counter ++;
            }
            guesses = [...new Set(guesses)];
            while (j < charachters.length)
            
            {
                var charItem = charachters[j];
                var charIndex = charachters.indexOf(charItem);

                

                    if (userGuess == charachters[charIndex] && !document.getElementById(userGuess).innerText)
                    {  
                        
                                spanEl.appendChild(nodeShit);
                                j = charachters.length;
    
              
                    }    
                
                

                
                
                j++;
            }    
            console.log('guesses '+ guesses);
            console.log('counter ' + counter);
            
            
        }
