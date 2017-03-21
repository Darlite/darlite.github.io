function add (a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division (a,b) {
    return a / b;
}

function intDivision (a,b) {
    return parseInt(a / b);
}

console.log("Add function: ");
console.log("add(1, 2): " + add(1, 2));
console.log("add(1, -2): " + add(1, -2));
console.log("add(2, { }): " + add(2, { }));
console.log("add(NaN, 3): " + add(NaN, 3));
console.log("add(null, 5): " + add(null, 5));
console.log("add('c', 7): " + add('c', 7));
console.log("add('hi', 4): " + add('hi', 4));
console.log("add(3, undefined): " + add(3, undefined));
console.log("add(-Infinity, Infinity): " + add(-Infinity, Infinity));
console.log("add(-Infinity, 9999999): " + add(-Infinity, 9999999));
console.log("add(-999999, Infinity): " + add(-999999, Infinity));
console.log("add(1, 5, 3): " + add(1, 5, 3));
console.log("add(1): " + add(1));
console.log("add(): " + add());

console.log("Sub function: ");
console.log("sub(5, 4): " + sub(5, 4));
console.log("sub(-5, -5): " + sub(-5, -5));
console.log("sub(4, { }): " + sub(4, { }));
console.log("sub(NaN, 12): " + sub(NaN, 12));
console.log("sub(13, NaN): " + sub(13, NaN));
console.log("sub(null, 6): " + sub(null, 6));
console.log("sub(7, null): " + sub(7, null));
console.log("sub('s', 9): " + sub('s', 9));
console.log("sub(10, 'k'): " + sub(10, 'k'));
console.log("sub('string', 18): " + sub('string', 18));
console.log("sub(19, 'ano'): " + sub(19, 'ano'));
console.log("sub(undefined, 12): " + sub(undefined, 12));
console.log("sub(-Infinity, -Infinity): " + sub(-Infinity, -Infinity));
console.log("sub(-Infinity, Infinity): " + sub(-Infinity, Infinity));
console.log("sub(Infinity, -Infinity): " + sub(Infinity, -Infinity));
console.log("sub(Infinity, 10): " + sub(Infinity, 10));
console.log("sub(5, 7, 2): " + sub(5, 7, 2));
console.log("sub(1): " + sub(1));
console.log("sub(): " + sub());

console.log("Multiplication function: ");
console.log("multiplication(5, 4): " + multiplication(5, 4));
console.log("multiplication('rq', 11): " + multiplication('rq', 11));
console.log("multiplication('p', 5): " + multiplication('p', 5));
console.log("multiplication(7, { }): " + multiplication(7, { }));
console.log("multiplication(NaN, 14): " + multiplication(NaN, 14));
console.log("multiplication(null, 15): " + multiplication(null, 15));
console.log("multiplication(13, NaN): " + multiplication(13, NaN));
console.log("multiplication(15, null): " + multiplication(15, null));
console.log("multiplication(undefined, 11): " + multiplication(undefined, 11));
console.log("multiplication(Infinity, 0): " + multiplication(Infinity, 0));
console.log("multiplication(Infinity, 1): " + multiplication(Infinity, 1));
console.log("multiplication(Infinity, -1): " + multiplication(Infinity, -1));
console.log("multiplication(Infinity, -Infinity): " + multiplication(Infinity, -Infinity));
console.log("multiplication(2, 32, 546546, 434): " + multiplication());
console.log("multiplication(2, 3, 6): " + multiplication());
console.log("multiplication(55): " + multiplication());
console.log("multiplication(): " + multiplication());

console.log("Division function: ");
console.log("division(15, 5): " + division(15, 5));
console.log("division(14, 6): " + division(14, 6));
console.log("division(0, 15): " + division(0, 15));
console.log("division(15, 0): " + division(15, 0));
console.log("division('y', 0): " + division('y', 0));
console.log("division('fdd', 0): " + division('fdd', 0));
console.log("division(4, { }): " + division(4, { }));
console.log("division(NaN, 12): " + division(NaN, 12));
console.log("division(null, 14): " + division(null, 14));
console.log("division(15, null): " + division(15, null));
console.log("division(undefined, 17): " + division(undefined, 17));
console.log("division(Infinity, 0): " + division(Infinity, 0));
console.log("division(-Infinity, 0): " + division(-Infinity, 0));
console.log("division(Infinity, Infinity): " + division(Infinity, Infinity));
console.log("division(-Infinity, Infinity): " + division(-Infinity, Infinity));
console.log("division(11, 444, 2): " + division());
console.log("division(55): " + division());
console.log("division(): " + division());

console.log("Integer division function: ");
console.log("intDivision(12, 4): " + intDivision(12, 4));
console.log("intDivision(11, 6): " + intDivision(11, 6));
console.log("intDivision(15, 0): " + intDivision(15, 0));
console.log("intDivision({ }, 11): " + intDivision({ }, 11));
console.log("intDivision('c', 7): " + intDivision('c', 7));
console.log("intDivision('ofpo', 78): " + intDivision('ofpo', 78));
console.log("intDivision(NaN, 10): " + intDivision(NaN, 10));
console.log("intDivision(15, null): " + intDivision(15, null));
console.log("intDivision(null, 12): " + intDivision(null, 12));
console.log("intDivision(undefined, 11): " + intDivision(undefined, 11));
console.log("intDivision(Infinity, Infinity): " + intDivision(Infinity, Infinity));
console.log("intDivision(Infinity, 0): " + intDivision(Infinity, 0));
console.log("intDivision(-Infinity, Infinity): " + intDivision(-Infinity, Infinity));
console.log("intDivision(15, 4, 6): " + intDivision(15, 4, 6));
console.log("intDivision(235879): " + intDivision());
console.log("intDivision(): " + intDivision());
