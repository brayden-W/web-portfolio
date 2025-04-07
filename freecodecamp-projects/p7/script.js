const numInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputP = document.getElementById("output");

let outputArray = [];

const numToRoman = (input) => {
  if (String(input).length === 4) {
    outputArray.push("M");
      return numToRoman(input - 1000);
  } else if (String(input).length === 3) {
    if (input > 899) {
      outputArray.push("CM");
      return numToRoman(input - 900);
    } else if (input > 499) {
      outputArray.push("D");
      return numToRoman(input - 500);
    } else if (input > 399) {
      outputArray.push("CD");
      return numToRoman(input - 400);
    } else if (input > 99) {
      outputArray.push("C");
      return numToRoman(input - 100);
    }
  } else if (String(input).length === 2) {
    if (input > 89) {
      outputArray.push("XC");
      return numToRoman(input - 90);
    } else if (input > 49) {
      outputArray.push("L");
      return numToRoman(input - 50);
    } else if (input > 39) {
      outputArray.push("XL");
      return numToRoman(input - 40);
    } else if (input > 9) {
      outputArray.push("X");
      return numToRoman(input - 10);
    }
  } else if (String(input).length === 1) {
    if (input > 8) {
      outputArray.push("IX");
      return numToRoman(input - 9);
    } else if (input > 4) {
      outputArray.push("V");
      return numToRoman(input - 5);
    } else if (input > 0) {
      outputArray.push("I");
      return numToRoman(input - 1);
    }
  }
  if (input === 0) {
    return;
  }
}

const checkUserInput = () => {
  outputArray = [];
  outputP.innerText = "";
  const input = parseInt(numInput.value);
  if (!input && input !== 0) {
    outputP.innerText = "Please enter a valid number";
  } else if (input < 1) {
    outputP.innerText = "Please enter a number greater than or equal to 1"
  } else if (input > 3999) {
    outputP.innerText = "Please enter a number less than or equal to 3999"
  } else {
    numToRoman(input);
    outputP.innerText = outputArray.join('');
  }
}


convertBtn.addEventListener("click", checkUserInput);