function writeNumber(number, id) {
  var displayText = document.getElementById(id).value;
  if (displayText != '0') {
    document.getElementById(id).value = displayText + number;
  }
}

function clearDisplay(id) {
  document.getElementById(id).value = '';
}

function clearLast(id) {
  var displayText = document.getElementById(id).value;
  document.getElementById(id).value = displayText.replace(displayText[displayText.length-1], '');
}

function writeSign(sign, id) {
  var displayText = document.getElementById(id).value;
  var lastSymbol = displayText[displayText.length-1];
  var calcSigns = ['/', '*', '-', '+', '.', 'e', '^'];
  if (lastSymbol != sign && sign == '-') {
    document.getElementById(id).value = displayText + sign;
  } else if (lastSymbol != sign && lastSymbol !== undefined && !calcSigns.includes(lastSymbol)) {
    document.getElementById(id).value = displayText + sign;
  }
}

function writeFunction(func, id) {
  var displayText = document.getElementById(id).value;
  if (displayText != '') {
    var functionText = func + "(" + displayText + ")";
    document.getElementById(id).value = functionText;
  }
}

function expandFunctions(id) {
  var displayValue = document.getElementsByClassName(id)[0].style.display;
  document.getElementsByClassName(id)[0].style.display = displayValue == "block" ? "none" : "block";
}

function calculate(id) {
  var displayText = document.getElementById(id).value;
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
    displayTextPow = displayTextPow.replace(matchPow[0], "Math.pow(" + matchPow[1] + "," + matchPow[2] + ")");
  }
  
  if (displayTextPow != undefined && displayTextPow != '') {
    document.getElementById(id).value = eval(displayTextPow);
  }
}
