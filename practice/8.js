let n = 4;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        string += "*";

    }
    string += "\n";
}
console.log(string);