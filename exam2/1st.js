let string = "";
var i, j, k, m, n;
for (i = 1; i <= 5; i++) {
    for (j = 5; j >= i; j--)
        string += " ";
    for (k = 1; k <= i; k++)
        string += (k + " ");
    n = k - 1;
    for (m = 1; m < i; m++)
        string += (--n + " ");
    string += "\n";
}
console.log(string);