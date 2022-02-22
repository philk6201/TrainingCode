let n = 10;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (l = 1; l <= i; l++) {
        string += count;
        string += "  ";
        count++;
    }
    string += "\n";
}
console.log(string);