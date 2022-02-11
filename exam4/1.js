let string = "";
let n = 7;
for (i = 0; i <= n; i++) {
    for (j = 0; j <= n; j++) {
        if (i == 0 || i + j == 5 || j - i > n || i - j > n) {
            string += "*";
        } else {
            string += " ";
        }

    }
    string += "\n";
}
console.log(string);