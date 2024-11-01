function decodeMorse(morseCode) {
  let decoded = morseCode.split('   ')
  for (i=0; i < decoded.length; i++) {
  return decoded.map(el => decodedSentence(el)).join(' ').trim()
  }
}

function decodedSentence(sentence) {
  let decSentence = sentence.split(' ')
  for (let decodedSymbol of decSentence) {
  return decSentence.map(el => decodedLetter(el)).join('')
  }
}


function decodedLetter(letter) {
  return MORSE_CODE[letter]
}

