let string = "";
var i, j, k;
// First Part

for (i = 1; i <= 5; i++) {
    for (j = i; j <= 5; j++)
        string += "*";
    for (k = 1; k < (i * 2) - 1; k++)
        string += " ";
    for (j = i; j <= 5; j++)
        string += "*";
    for (k = 1; k < i * 2; k++)
        string += " ";
    string += "\n";
}
// Second Part
for (i = 4; i >= 1; i--) {
    for (j = 5; j >= i; j--)
        string += "*";
    for (k = 1; k < (i * 2) - 1; k++)
        string += " ";
    for (j = 5; j >= i; j--)
        string += "*";
    for (k = 1; k < i * 2; k++)
        string += " ";
    string += "\n";
}
console.log(string);