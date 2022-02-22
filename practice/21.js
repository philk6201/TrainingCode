let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (k = 1; k <= (n * 2) - 1; k++) {
        if (i + k == n + 1 || k - i == n - 1 || i == n) {
            string += "*";
        } else {
            string += " ";
        }

    }
    string += "\n";
}
console.log(string);