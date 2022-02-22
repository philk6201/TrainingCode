let n = 8;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= (n - i) + 1; j++) {
        string += "*";
    }
    for (k = 1; k <= i - 1; k++) {
        string += " " + " ";
    }
    for (l = 1; l <= (n - i) + 1; l++) {
        string += "*";
    }
    string += "\n";
}

for (i = 1; i <= n; i++) {
    for (k = 1; k <= i; k++) {
        string += "*";
    }
    for (l = 1; l <= n - i; l++) {
        string += " " + " ";
    }
    for (k = 1; k <= i; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);