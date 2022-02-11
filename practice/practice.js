let n = 25;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == ((n + 1) / 2)) {
            string += "*";
        } else {
            string += " ";
        }
    }

    string += "\n";
}
console.log(string);