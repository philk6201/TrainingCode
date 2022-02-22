let n = 20;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= (n * 2) - 1; j++) {
        if (i == n || i + j == n + 1 || j - i == n - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";

}
console.log(string);