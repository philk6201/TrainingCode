let string = "";
let n = 9;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j <= (n + 1) / 2) {
            if (i + j == ((n + 1) / 2) + 1 || i - j == (((n + 1) / 2) - 1)) {
                string += "*";
            } else {
                string += " ";
            }
        } else {
            if (j + i == (((n + 1) / 2) + 2) * 2 || j - i == ((n + 1) / 2) - 1) {
                string += "*";
            } else {
                string += " ";
            }
        }

    }
    string += "\n";

}
console.log(string);