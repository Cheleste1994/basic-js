const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isRever = true) {
    this.isRever = isRever;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

   text = text.toUpperCase();
   key = key.toUpperCase();
   let result = '';
   let j = 0;

   for (let i = 0; i < text.length; i++) {
  const textChar = text.charAt(i);
  if (/^[A-Z]$/.test(textChar)) {
    const keyChar = key.charAt(j % key.length);
    const encryptedChar = String.fromCharCode(((textChar.charCodeAt(0) + keyChar.charCodeAt(0)) % 26) + 65);
    console.log((textChar.charCodeAt(0) + keyChar.charCodeAt(0)) % 26)
    result += encryptedChar;
    j++;
  } else {
    result += textChar;
     }
    }

    return this.isRever ? result : result.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let j = 0;
    console.log(text)
  for (let i = 0; i < text.length; i++) {
  const encryptedChar = text.charAt(i);
  if (/^[A-Z]$/.test(encryptedChar)) {
    const keyChar = key.charAt(j % key.length);
    const resultChar = String.fromCharCode(((encryptedChar.charCodeAt(0) - keyChar.charCodeAt(0) + 26) % 26) + 65);
    result += resultChar;
    j++;
  } else {
    result += encryptedChar;
  }
  }

 return this.isRever ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
