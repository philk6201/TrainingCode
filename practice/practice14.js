let string = "";
let n = 7;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || i == n || j == 1 || j == n || (i % 2 != 0 && j % 2 != 0 && j == i) || (i % 2 != 0 && j % 2 != 0 && j + i == n + 1) || (i % 2 != 0 && j == (n + 1) / 2) || (j % 2 != 0 && i == (n + 1) / 2)) {
            string += "*";
        } else {
            string += " ";
        }

    }
    string += "\n";
}
console.log(string);