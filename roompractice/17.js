let n = 15;
let string = "";
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (l = 1; l <= (2 * i) - 1; l++) {
        string += "*";
    }
    string += "\n";
}

for (i = 1; i <= n - 1; i++) {
    for (j = 1; j <= i; j++) {
        string += " ";

    }
    for (k = 1; k <= ((n - i) * 2) - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);