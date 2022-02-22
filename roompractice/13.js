let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (l = 1; l <= i; l++) {
        string += l;
    }
    for (m = 2; m <= i; m++) {
        string += l - m;
    }
    string += "\n";
}
console.log(string);