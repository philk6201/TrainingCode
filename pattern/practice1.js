let string = "";
let n = 4;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= 1; k++) {
        string += "*";

    }
    for (j = 1; j <= 2 - i; j++) {
        string += " ";
    }
    for (k)
        string += "\n";
}
console.log(string);