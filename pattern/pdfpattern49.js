let n = 10;
let string = "";
for (i = 1; i <= n; i++) {
    for (k = 0; k <= n - i; k++) {
        string += " ";
    }
    for (j = 1; j <= n; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);