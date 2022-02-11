let n = 6;
let string = "";

for (i = 2; i <= n; i++) {

    for (j = 1; j <= i; j++) {
        string += " ";
    }
    for (k = 0; k <= i; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);