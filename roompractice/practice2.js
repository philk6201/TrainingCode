let n = 6;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= 2 * i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);