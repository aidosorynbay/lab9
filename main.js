function problem2 (x,y) {
    perimeter = (x+y)*2
    return perimeter;
}

x=5;
y=8;
P=problem2 (x,y);

console.log("x=" + x + ", y="+ y + "\n" + "Perimeter: "+ P);

function problem10 (x,y) {
    if (x==y) {
        console.log("x=" + x + ", y="+ y + "\nThe given 2 numbers are equal.")
    }
    else {
        console.log("x=" + x + ", y="+ y + "\nThe given 2 numbers are not equal.")
    }
}

x=3;
y=10;
result = problem10(x,y);



function problem11 (x) {
    if (x%2==0) {
        console.log("x=" + x + "\nThe given number is even.")
    }
    else {
        console.log("x=" + x + "\nThe given number is odd")
    }
}

x=324102348;
result = problem11(x);