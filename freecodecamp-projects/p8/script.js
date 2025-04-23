const checkButton = document.getElementById("check-btn");
const resetButton = document.getElementById("clear-btn");

const historyEntryTemplate = document.getElementById("results-div").innerHTML;

const goodRegex = /^1?\s?(\(\d{3}\)|\d{3})\s?-?\d{3}\s?-?\d{4}$/;

const inputCheck = () => {
  const inputVal = document.getElementById("user-input").value;
  document.getElementById("user-input").value = "";
  const storedHistory = document.getElementById("results-div").innerHTML;

  if (inputVal.length < 1) {
    alert("Please provide a phone number");
  }

  if (goodRegex.test(inputVal)) {
    document.getElementById("results-div").innerHTML = `              <div class="results-div">
                <p class="outcome" id="results-text">Valid US number: ${inputVal}</p>
              </div>${storedHistory}`;
  } else {
    document.getElementById("results-div").innerHTML = `              <div class="results-div">
                <p class="outcome" id="results-text">Invalid US number: ${inputVal}</p>
              </div>${storedHistory}`
  }
}

const resetUI = () => {
  document.getElementById("user-input").value = "";
  document.getElementById("results-div").innerHTML = "";
}

checkButton.addEventListener("click", inputCheck);
resetButton.addEventListener("click", resetUI);