let n = 10;
let string = "";
for (i = 0; i <= n; i = i + 2) {
    for (j = 0; j <= i; j++) {
        string += n - j + " ";
    }
    string += "\n";
}
console.log(string);