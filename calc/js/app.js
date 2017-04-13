function writeNumber(number) {
  var displayText = document.getElementById("input-display").value;
  if (displayText != '0') {
    document.getElementById("input-display").value = displayText + number;
  }
}

function clearDisplay() {
  document.getElementById("input-display").value = '';
}

function clearLast() {
  var displayText = document.getElementById("input-display").value;
  document.getElementById("input-display").value = displayText.replace(displayText[displayText.length-1], '');
}

function writeSign(sign) {
  var displayText = document.getElementById("input-display").value;
  var lastSymbol = displayText[displayText.length-1];
  var calcSigns = ['/', '*', '-', '+', '.', 'e', '^'];
  if (lastSymbol != sign && lastSymbol !== undefined && !calcSigns.includes(lastSymbol)) {
    document.getElementById("input-display").value = displayText + sign;
  }
}

function writeFunction(func) {
  var displayText = document.getElementById("input-display").value;
  if (displayText != '') {
    var functionText = func + "(" + displayText + ")";
    document.getElementById("input-display").value = functionText;
  }
}

function expandFunctions() {
  var displayValue = document.getElementsByClassName("hidden-functions")[0].style.display;
  document.getElementsByClassName("hidden-functions")[0].style.display = displayValue == "block" ? "none" : "block";
}

function calculate() {
  var displayText = document.getElementById("input-display").value;
  var functions = ['sqrt', 'sin', 'cos', 'tan', 'asin', 'acos', 'atan'];
  var regExpFunc = /(?:^sqrt|\(sqrt)|(?:^sin|\(sin)|(?:^cos|\(cos)|(?:^tan|\(tan)|(?:^asin|\(asin)|(?:^acos|\(acos)|(?:^atan|\(atan)/g;
  var displayTextFunc = displayText;
  var matchFunc = regExpFunc.exec(displayText);
  
  while (matchFunc != null) {
    var replaceValue;
    if (functions.includes(matchFunc[0])) {
      replaceValue = "Math." + matchFunc[0];
    } else {
      var funcWithoutBracket = matchFunc[0].replace('(', '');
      replaceValue = "(Math." + funcWithoutBracket;
    }
    displayTextFunc = displayTextFunc.replace(matchFunc[0], replaceValue);
    matchFunc = regExpFunc.exec(displayTextFunc);
  }
  
  // for pow function
  var regExpPow = /(.+)\^(.+)/g;
  var displayTextPow = displayTextFunc;
  var matchPow;
  
  while (displayTextPow.indexOf('^') != -1) {
    matchPow = regExpPow.exec(displayTextPow);
    console.log(matchPow);
    displayTextPow = displayTextPow.replace(matchPow[0], "Math.pow(" + matchPow[1] + "," + matchPow[2] + ")");
  }
  
  if (displayTextPow != undefined && displayTextPow != '') {
    document.getElementById("input-display").value = eval(displayTextPow);
  }
}
