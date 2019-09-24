var mainElement = document.createElement("main");
mainElement.id = "main"
document.body.appendChild(mainElement)



var resultElement = document.createElement("div");
resultElement.id = "result"
mainElement.appendChild(resultElement)

var resetBtn = document.createElement("button");
resetBtn.id = "reset"
mainElement.appendChild(resetBtn)
resetBtn.innerHTML = "CE"

var allBtn = document.createElement("div");
allBtn.className = "all"
mainElement.appendChild(allBtn)

var keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/", ".", "="]



var oneInput = document.createElement("button");
oneInput.id = "one"
allBtn.appendChild(oneInput)
oneInput.innerHTML = "1";

var twoInput = document.createElement("button");
twoInput.id = "two"
allBtn.appendChild(twoInput)
twoInput.innerHTML = "2";

var threeInput = document.createElement("button");
threeInput.id = "three"
allBtn.appendChild(threeInput)
threeInput.innerHTML = "3";

var fourInput = document.createElement("button");
fourInput.id = "four"
allBtn.appendChild(fourInput)
fourInput.innerHTML = "4";

var fiveInput = document.createElement("button");
fiveInput.id = "five"
allBtn.appendChild(fiveInput)
fiveInput.innerHTML = "5";

var sixInput = document.createElement("button");
sixInput.id = "six"
allBtn.appendChild(sixInput)
sixInput.innerHTML = "6";

var sevenInput = document.createElement("button");
sevenInput.id = "seven"
allBtn.appendChild(sevenInput)
sevenInput.innerHTML = "7";

var eightInput = document.createElement("button");
eightInput.id = "eight"
allBtn.appendChild(eightInput)
eightInput.innerHTML = "8";

var nineInput = document.createElement("button");
oneInput.id = "nine"
allBtn.appendChild(nineInput)
nineInput.innerHTML = "9";

var zeroInput = document.createElement("button");
zeroInput.id = "zero"
allBtn.appendChild(zeroInput)
zeroInput.innerHTML = "0";

var plusInput = document.createElement("button");
plusInput.id = "plus"
allBtn.appendChild(plusInput)
plusInput.innerHTML = "+";

var minusInput = document.createElement("button");
minusInput.id = "minus"
allBtn.appendChild(minusInput)
minusInput.innerHTML ="-";

var multiplyInput = document.createElement("button");
multiplyInput.id = "multiply"
allBtn.appendChild(multiplyInput)
multiplyInput.innerHTML = "*";

var divideInput = document.createElement("button");
divideInput.id = "divide"
allBtn.appendChild(divideInput)
divideInput.innerHTML = "/";

var pointInput = document.createElement("button");
pointInput.id = "point"
allBtn.appendChild(pointInput)
pointInput.innerHTML =".";

var equalInput = document.createElement("button");
equalInput.id = "equal"
allBtn.appendChild(equalInput)
equalInput.innerHTML = "=";



