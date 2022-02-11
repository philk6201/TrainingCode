let n = 5;
let string = "";

var i, j, k;


for (i = 1; i <= 5; i++) {
    for (j = i; j <= (n + i) - i; j++)
        string += "*";

    for (k = 1; k < (i * 2) - 1; k++)
        string += " ";

    for (j = i; j <= 5; j++)
        string += "*";

    for (k = 1; k < i * 2; k++)
        string += " ";
    string += "\n";
}
console.log(string);