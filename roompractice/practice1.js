let n = 10;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= ((2 * i) - 1); j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);