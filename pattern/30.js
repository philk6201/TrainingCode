let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (k = i; k >= 1; k--) {
        string += k + " ";
    }
    string += "\n";
}
console.log(string);