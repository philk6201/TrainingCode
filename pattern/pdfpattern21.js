let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == n || (i + j == 6) || (j - i == 4)) {
            string += "*";
        } else {
            string += " ";

        }

    }
    string += "\n";
}
console.log(string);