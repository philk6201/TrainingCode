let n = 5;
let string = "";
let k;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= 2 * n - 1; j++) {
        if (j >= n - i + 1 && j <= n + i - 1) {

            k = j > n ? n - (j - n) : j;
            string += k + " ";
        } else {
            string += "  ";
        }
    }
    string += "\n";
}
console.log(string);