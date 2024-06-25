let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 8
let maxNumber = 100

function newGame(){
    window.location.reload()
}

function init(){
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)

}

function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value)
    userNumbers.push(' '+userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
    
    if(attempts < maxGuesses){
        if(userNumber > computerNumber){
            document.getElementById ('textOutput').innerHTML = 'Seu numero é maior'
            document.getElementById ('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        
        
        else if(userNumber < computerNumber){
            document.getElementById ('textOutput').innerHTML = 'Seu numero é menor'
            document.getElementById ('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
    
        else{
            document.getElementById ('textOutput').innerHTML = 'Parabens, você acertou!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById ('inputBox').setAttribute('Readonly', 'Readonly')
        }

    }
    else{
    
        document.getElementById ('textOutput').innerHTML = 'Você perdeu,o numero correto era: ' + computerNumber
        document.getElementById ('inputBox').setAttribute('Readonly', 'Readonly')
    }
    if (userNumber > maxNumber){
        document.getElementById ('textOutput').innerHTML = 'Seu numero é invalido'
    }
    
}