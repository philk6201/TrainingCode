let string = "";
let n = 5;
for (i = 0; i <= n; i++) {
    for (j = 0; j <= n - i; j++) {
        string += "*";
    }
    for (j = 1; j <= 2 * i; j++) {
        string += " ";
    }
    for (k = 1; k <= (n - i) + 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);