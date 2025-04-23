const respWebDesignButton = document.getElementById("respWebDesign-btn");
const jsAlgoDataStructButton = document.getElementById("jsAlgorithmsAndDataStructures-btn");
const feedbackFormButton = document.getElementById("feedbackForm-btn");
const tributePageButton = document.getElementById("tributePage-btn");
const technicalDocPageButton = document.getElementById("technicalDocPage-btn");
const prodLandingPageButton = document.getElementById("prodLandingPage-btn");
const portfolioPageButton = document.getElementById("portfolioPage-btn");
const palindromeCheckerButton = document.getElementById("palindromeChecker-btn");
const romanNumeralConverterButton = document.getElementById("romanNumeralConverter-btn");
const phoneNumberValidatorButton = document.getElementById("phoneNumberValidator-btn");

const respWebDesignBar = document.getElementById("respWebDesign-project-bar");
const jsAlgoDataStructBar = document.getElementById("jsAlgorithmsAndDataStructures-project-bar");

let visibleProjectBar = false;

const resetUI = () => {
    respWebDesignBar.classList.add("empty");
    jsAlgoDataStructBar.classList.add("empty");
    visibleProjectBar = false;
}

respWebDesignButton.addEventListener("click", () => {
    if (respWebDesignBar.classList.contains("empty") && !visibleProjectBar) {
        visibleProjectBar = true;
        respWebDesignBar.classList.remove("empty");
    } else if (respWebDesignBar.classList.contains("empty") && visibleProjectBar) {
        resetUI();
        respWebDesignBar.classList.remove("empty");
        visibleProjectBar = true;
    } else {
        resetUI();
    }
});

jsAlgoDataStructButton.addEventListener("click", () => {
    if (jsAlgoDataStructBar.classList.contains("empty") && !visibleProjectBar) {
        visibleProjectBar = true;
        jsAlgoDataStructBar.classList.remove("empty");
    } else if (jsAlgoDataStructBar.classList.contains("empty") && visibleProjectBar) {
        resetUI();
        jsAlgoDataStructBar.classList.remove("empty");
        visibleProjectBar = true;
    } else {
        resetUI();
    }
});

feedbackFormButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p1/survey.html";
});

tributePageButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p2/tribute-page.html";
});

technicalDocPageButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p3/doc-page.html";
});

prodLandingPageButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p4/product.html";
});

portfolioPageButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p5/old-portfolio.html";    
});

palindromeCheckerButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p6/palindrome-checker.html";
});

romanNumeralConverterButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p7/romanconverter.html";
});

phoneNumberValidatorButton.addEventListener("click", () => {
    document.getElementById("project-viewer").src = "p8/phone-number-validator.html";
});