let string = "";
let n = 21;
if (n % 2 == 0)
    n = n - 1;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || i + j == ((n + 1) / 2) * 2 || i == j) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);