let n = 10;

let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= 2 * n; j++) {
        if ((j > n + i - 1) || (j <= n - i + 1)) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";

}
console.log(string);