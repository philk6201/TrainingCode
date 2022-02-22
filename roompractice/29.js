let n = 10;
let string = "";
for (i = 0; i < n; i++) {
    for (k = 0; k < i; k++) {
        string += " ";
    }
    for (l = 0; l < (n - i); l++) {
        string += n - l - k;
    }
    string += "\n";
}
console.log(string);