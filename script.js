const input = document.getElementById('number');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convert-btn');

const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

function convertToRoman() {
    output.textContent = "";
    const str = input.value;
    let num = parseInt(str);
    if(str === ""){
        output.textContent = "Please enter a valid number";
        return;
    }

    if(num < 1){
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    if(num > 3999){
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    for(let i = 0; i < decimals.length; i++){
        while(num >= decimals[i]){
            output.textContent += romans[i];
            num -= decimals[i];
        }
    }

    return;


}

convertBtn.addEventListener('click', convertToRoman);