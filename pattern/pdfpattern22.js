let n = 11;
let b = 10;
let string = "";
for (i = 1; i <= n; i++) {

    for (j = 0; j < i - 1; j++) {
        string += " ";
    }

    for (k = 0; k < i; k++) {
        string += "*";
    }
    string += "\n";
}

for (i = 1; i <= b; i++) {
    for (j = 0; j < b - i; j++) {
        string += " ";

    }
    for (k = 0; k < (b - i) + 1; k++) {
        string += "*";

    }
    string += "\n";
}
console.log(string);