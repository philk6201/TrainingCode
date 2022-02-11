let string = "";
let n = 5;
let b = 4;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        string += i;
        string += "*";
    }

    string += "\n";
}
for (i = b; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
        string += i;

        string += "*";
    }
    string += "\n";
}
console.log(string);