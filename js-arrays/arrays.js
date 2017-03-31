function isArrayOne(a) {
  return a instanceof Array;
}

function isArrayTwo(a) {
  return Array.isArray(a);
}

function isArrayThree(a) {
  return Object.prototype.toString.call(a) === "[object Array]";
}

function range(a, b, c) {
  var arr = [];
  var i = 0;
  var j, k;
  if (b == undefined) {
    j = a;
  } else {
    i = a;
    j = b;
  }
  if (c == undefined || c <= 0) {
    k = 1;
  } else {
    k = c;
  }
  for (i; i < j; i += k) {
    arr.push(i);
  }
  return arr;
}

function compactLoop(a) {
  var arr = [];
  if (Array.isArray(a)) {
    for (var i = 0; i < a.length; i++) {
      if (a[i]) {
        arr.push(a[i]);
      }
    }
    return arr;
  } else {
    console.log(a + " is not an array");
  }
}

function compact(a) {
  if (Array.isArray(a)) {
    return a.filter(function(el) {
      return el ? true : false; 
    });
  } else {
    console.log(a + " is not an array");
  }
}

function sumLoop(a) {
  if (Array.isArray(a)) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
      sum += a[i];
    }
    return sum;
  } else {
    console.log(a + " is not an array");
  }
}

function sum(a) {
  if (Array.isArray(a)) {
    return a.reduce(function(a,b) {
      return a + b;
    });
  } else {
    console.log(a + " is not an array");
  }
}

function unique(a) {
  if (Array.isArray(a)) {
    var arr = [];
    a.forEach(function(el) {
      if (!arr.includes(el)) {
        arr.push(el);
      }
    });
    return arr;
  } else {
    console.log(a + " is not an array");
  }
}

function last(a) {
  if (Array.isArray(a)) {
    return a[a.length-1];
  } else {
    console.log(a + " is not an array");
  }
}

function excludeLast(a, b) {
  if (Array.isArray(a)) {
    if (b === undefined) {
      a.pop();
    } else if (typeof b == "number") {
      a.splice(a.length - b);
    }
    return a;
  } else {
    console.log(a + " is not an array");
  }
}

console.log("function isArrayOne()");
console.log("isArrayOne([]): " + isArrayOne([]));
console.log("isArrayOne([1, null, 8, undefined, 5]): " + isArrayOne([1, null, 8, undefined, 5]));
console.log("isArrayOne(5): " + isArrayOne(5));
console.log("isArrayOne({ }): " + isArrayOne({ }));
console.log("isArrayOne('12'): " + isArrayOne("12"));
console.log("isArrayOne('string'): " + isArrayOne("string"));
console.log("isArrayOne(null): " + isArrayOne(null));
console.log("isArrayOne(undefined): " + isArrayOne(undefined));

console.log("function isArrayTwo()");
console.log("isArrayTwo([]): " + isArrayTwo([]));
console.log("isArrayTwo([1, null, 8, undefined, 5]): " + isArrayTwo([1, null, 8, undefined, 5]));
console.log("isArrayTwo(5): " + isArrayTwo(5));
console.log("isArrayTwo({ }): " + isArrayTwo({ }));
console.log("isArrayTwo('12'): " + isArrayTwo("12"));
console.log("isArrayTwo('string'): " + isArrayTwo("string"));
console.log("isArrayTwo(null): " + isArrayTwo(null));
console.log("isArrayTwo(undefined): " + isArrayTwo(undefined));

console.log("function isArrayThree()");
console.log("isArrayThree([]): " + isArrayThree([]));
console.log("isArrayThree([1, null, 8, undefined, 5]): " + isArrayThree([1, null, 8, undefined, 5]));
console.log("isArrayThree(5): " + isArrayThree(5));
console.log("isArrayThree({ }): " + isArrayThree({ }));
console.log("isArrayThree('12'): " + isArrayThree("12"));
console.log("isArrayThree('string'): " + isArrayThree("string"));
console.log("isArrayThree(null): " + isArrayThree(null));
console.log("isArrayThree(undefined): " + isArrayThree(undefined));

console.log("function range()");
console.log("range(5): " + range(5));
console.log("range(1, 5): " + range(1, 5));
console.log("range(1, 10, 2): " + range(1, 10, 2));
console.log("range(1, 10, 0): " + range(1, 10, 0));
console.log("range(-1, 10, 4): " + range(-1, 10, 4));
console.log("range(1, -10, 4): " + range(1, -10, 4));

console.log("function compactLoop()");
console.log("compactLoop([1, 0, { }, [], null, undefined]): " + compactLoop([1, 0, { }, [], null, undefined]));
console.log("compactLoop(123): " + compactLoop(123));
console.log("compactLoop([]): " + compactLoop([]));
console.log("compactLoop(undefined): " + compactLoop(undefined));
console.log("compactLoop([false, false]): " + compactLoop([false, false]));

console.log("function compact()");
console.log("compact([1, 0, { }, [], null, undefined]): " + compact([1, 0, { }, [], null, undefined]));
console.log("compact(123): " + compact(123));
console.log("compact([]): " + compact([]));
console.log("compact([false, false]): " + compact([false, false]));

console.log("function sumLoop()");
console.log("sumLoop([3, 4, 13]): " + sumLoop([3, 4, 13]));

console.log("function sum()");
console.log("sum([5, 4, 1]): " + sum([5, 4, 1]));

console.log("function unique()");
console.log("unique([5, 5, 6, 8, 8, 9]): " + unique([5, 5, 6, 8, 8, 9]));

console.log("function last()");
console.log("last([7, 5, , 9]): " + last([7, 5, , 9]));
console.log("last([7, 5, 9,]): " + last([7, 5, 9, ]));

console.log("function excludeLast()");
console.log("excludeLast([6, 1, , 8]): " + excludeLast([6, 1, , 8]));
console.log("excludeLast([6, 1, 8,]): " + excludeLast([6, 1, 8,]));
console.log("excludeLast([6, 1, 8,], 2): " + excludeLast([6, 1, 8,], 2));
console.log("excludeLast([6, 1, 8, 9, 5, 4, 13], 3): " + excludeLast([6, 1, 8, 9, 5, 4, 13], 3));
