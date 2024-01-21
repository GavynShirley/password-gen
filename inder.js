const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passButton = document.getElementById('pass-btn');
const pass1 = document.getElementById('pass-output1');
const pass2 = document.getElementById('pass-output2');

function generatePass() {
    pass1.textContent = '';
    pass2.textContent = '';
    for (let i = 0; i < 15; i++) {
        let randomPass1 = Math.floor(Math.random() * characters.length)
        let randomPass2 = Math.floor(Math.random() * characters.length)
        pass1.textContent += characters[randomPass1]
        pass2.textContent += characters[randomPass2]
    }
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const textToCopy = element.textContent;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Unable to copy text to clipboard:', err.message || err);
        });
}
