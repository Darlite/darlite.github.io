function binarySearch(arr, n) {
  var middleIndex = Math.floor(arr.length / 2);
  var middleValue = arr[middleIndex];
  
  if (middleIndex == 0 && middleValue != n) {
    return -1;
  } else if (n < middleValue) {
    return binarySearch(arr.slice(0, middleIndex), n);
  } else if (n == middleValue) {
    return middleIndex;
  } else if (n > middleValue) {
    return binarySearch(arr.slice(middleIndex, arr.length), n) < 0 ?
      binarySearch(arr.slice(middleIndex, arr.length), n) - middleIndex : 
      binarySearch(arr.slice(middleIndex, arr.length), n) + middleIndex;
  }
}

var a = [1, 3, 5, 7, 9, 22, 25, 26, 28, 30];
console.log("a = " + a);
console.log("1: " + binarySearch(a, 1));
console.log("22: " + binarySearch(a, 22));
console.log("30: " + binarySearch(a, 30));
console.log("100: " + binarySearch(a, 100));
console.log("31: " + binarySearch(a, 31));
console.log("4: " + binarySearch(a, 4));
