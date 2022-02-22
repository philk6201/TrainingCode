let n = 5;
let string = "";

var i, j, k;
// First Part

for (i = 1; i <= n; i++) {
    for (j = i; j <= (n - i) + i; j++)
        string += "*";
    for (k = 1; k < (2 * i) - 1; k++)
        string += " ";
    for (j = i; j <= n; j++)
        string += "*";
    string += "\n";
}
console.log(string);