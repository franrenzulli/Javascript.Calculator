const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");
const buttonThree = document.getElementById("buttonThree");
const buttonFour = document.getElementById("buttonFour");
const buttonFive = document.getElementById("buttonFive");
const buttonSix = document.getElementById("buttonSix");
const buttonSeven = document.getElementById("buttonSeven");
const buttonEight = document.getElementById("buttonEight");
const buttonNine = document.getElementById("buttonNine");
const buttonZero = document.getElementById("buttonZero");
const buttonDelete = document.getElementById("buttonDelete");
const buttonDivision = document.getElementById("buttonDivision");
const buttonMultiplication = document.getElementById("buttonMultiplication");
const buttonSum = document.getElementById("buttonSum");
const buttonSubstraction = document.getElementById("buttonSubstraction");
const buttonEqual = document.getElementById("buttonEqual");
const buttonPoint = document.getElementById("buttonPoint");
const buttonModule = document.getElementById("buttonModule");
const divPoint = document.getElementById("divPoint");
const divExponentiation = document.getElementById("divExponentiation");
const numberSection = document.querySelector(".numberSection");
const buttonExpand = document.getElementById("buttonExpand");
const buttonMinimize = document.getElementById("buttonMinimize");
var counter = document.getElementById("numberCounter");
var imput1 = document.getElementById("imput1");
var imput2 = document.getElementById("imput2");
var container = document.querySelector(".mainContainer");
var divModule = document.getElementById("divModule");


function collectNumber(buttonClicked){
  counter.textContent += buttonClicked;
}

function calculateResult(){
  var result = eval(counter.textContent);
  counter.textContent = result;
}

buttonZero.addEventListener("click", function(){
  collectNumber(0);
})

buttonOne.addEventListener("click", function(){
  collectNumber(1);
})

buttonTwo.addEventListener("click", function(){
  collectNumber(2);
})

buttonThree.addEventListener("click", function(){
  collectNumber(3);
})

buttonFour.addEventListener("click", function(){
  collectNumber(4);
})

buttonFive.addEventListener("click", function(){
  collectNumber(5);
})

buttonSix.addEventListener("click", function(){
  collectNumber(6);
})

buttonSeven.addEventListener("click", function(){
  collectNumber(7);
})

buttonEight.addEventListener("click", function(){
  collectNumber(8);
})

buttonNine.addEventListener("click", function(){
  collectNumber(9);
})

buttonSum.addEventListener("click", function(){
  collectNumber("+");
})

buttonSubstraction.addEventListener("click", function(){
  collectNumber("-");
})

buttonMultiplication.addEventListener("click", function(){
  collectNumber("*");
})

buttonDivision.addEventListener("click", function(){
  collectNumber("/");
})

buttonPoint.addEventListener("click", function(){
  collectNumber(".");
})

buttonModule.addEventListener("click", function(){
  collectNumber("%");
})

buttonExponentiation.addEventListener("click", function(){
  collectNumber("**");
})

buttonEqual.addEventListener("click", function(){
  calculateResult();
})

buttonDelete.addEventListener("click", function(){
  counter.textContent = "";
})


// Button to expand the calculator and find new operational symbols.

buttonExpand.addEventListener("click", function(){
    container.classList.toggle('expandedContainer');
    numberSection.classList.toggle('expandedNumberSection');
    divMinimize.style.display = "block";
    divExponentiation.style.display = "block";
    divExpand.style.display = "none";
    divModule.style.display = "block";
    divPoint.style.display = "block";

})
