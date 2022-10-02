var input = "";
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
"p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


function translatte() {
    var div = document.getElementById("translation");
    /* console.log(div);
    if (div != null) {
        goAway(div)
    } */
    div.innerHTML = "";
    input = (document.getElementById("pleaseenterasmuchpersonalinformationaspossible").value);
    if (input != null){
        document.getElementById("test").innerHTML = input
        for (let i = 0; i < input.length; i++) { 
            var uppercase = false;
            var letter = input[i];
            if (letter == letter.toUpperCase()) {
                uppercase = true;
            }
            letter = letter.toLowerCase();
            var img = document.createElement("img");
            if (letters.includes(letter) == true) {
                img.src = "imagez/" + letter + ".png";
                if (uppercase == true) {
                    img.classList.add("upperclass");
                }
            }
            else if (letter == " ") {
                img.src="imagez/space.png";
                img.classList.add("upperclass");
            }
            else if (numbers.includes(letter) == true) {
                img.src = "imagez/" + letter + ".jpg";
            }
            else {
                img.src="imagez/fingerguns.png"
            }
            div.appendChild(img);
            var character = document.createElement("div");
            character.innerHTML += letter;
            div.appendChild(character);
            character.classList.add("characterclass");
            character.style.fontsize = `${Slider.value+5}px`;
        }
    }
}

document.addEventListener('keypress', checkkEy);

function checkkEy(e) {
    if (e.code == "Enter"){
        translatte();
    }
}

const Slider = document.querySelector('input[name = fontslider]');
//var slider = document.getElementById("myRange");
var output = document.getElementById("fontdisplay");
output.innerHTML = Slider.value;

Slider.oninput = function() {
    const Img = document.querySelectorAll('img');
    const Letters = document.querySelectorAll('.characterclass');
    console.log(Img.length);
    output.innerHTML = this.value;
    Slider.style.setProperty('--slidercolorval', `hsl(${Slider.value*3}, 100%, 50%)`);
    for (i=0; i<Img.length; i++) {
        Img[i].style.setProperty('--pictureSize', `${Slider.value+5}px`);
        console.log(Slider.value);
        if (Slider.value > 5) {
            Letters[i].style.setProperty('--pictureSize', `${Slider.value+5}px`);
        }
    }
    
}

//Slider.oninput =_=> Slider.style.setProperty('--slidercolorval', `hsl(${Slider.value*3}, 100%, 50%)`);

/*
function goAway(item) {
    while (item.firstChild) {
        item.removeChild(item.firstChild);
    }
} */


/* its this one
multi-line is superior */
// this one too ig 