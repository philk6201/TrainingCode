let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i + 1; j++) {
        string += n - j + 1;

    }
    string += "\n";
}
console.log(string);