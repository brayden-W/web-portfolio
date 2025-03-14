const checkButton = document.getElementById("check-btn");

const stringInput = document.getElementById("text-input");

const resultOutput = document.getElementById("result");

checkButton.addEventListener("click", () => {
  updateResult(stringInput.value);
});

// remove non-alpha char
const cleanInputString = (str) => {
  const regex = /[^a-zA-Z0-9]/g; 
  return str.toString().replace(regex, '');
};

// check if string is same as reverse
const palinCheck = (str) => { 
  let cleanStr = cleanInputString(str);
  if (cleanStr.split("").reverse().join("").toLowerCase() === cleanStr.toLowerCase()) {
    return true
  } else {
    return false
  };
};

const updateResult = (str) => {
  if (str === "") {
    alert("Please input a value");
    return
  }
  if (palinCheck(str)) {
    resultOutput.innerHTML = `${str} is a palindrome.`;
  } else {
    resultOutput.innerHTML = `${str} is not a palindrome.`;
  }
}