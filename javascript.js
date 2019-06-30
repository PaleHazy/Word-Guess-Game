var words = ['phone', 'electricity', 'video', 'table']
var singleWordsElement = document.getElementById('singleWords');
var charachters = [];


var random = Math.floor(Math.random() * words.length);


for (i = 0; i < words[random].length; i++) 
{
        charachters.push(words[random][i].toUpperCase());

    }
    
    for (i = 0; i < charachters.length; i ++)
        {
            var elementDiv = document.createElement('div');
            var elementSpan = document.createElement('span');
            var nodeShit = document.createTextNode(charachters[i]);
                elementDiv.setAttribute('class', 'inside');
                elementSpan.setAttribute('id', 'inSpan')
                singleWordsElement.appendChild(elementDiv);
                elementDiv.appendChild(elementSpan);
                
        }
    
    
    
    document.onkeyup = function(event) {
        var userGuess = event.key;
        
        
    }