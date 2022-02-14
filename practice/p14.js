let string = "";
let n = 7;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (i == 1 || j == 1 || i == n || j == n) {
            string += "*";
        } else {
            string += " ";

        }
    }
    string += "\n";
}
for (i = i + 2; i <= i + 4; i++) {
    for (j = j + 2; j <= j + 4; j++) {
        if (i == i + 2 || j == j + 2 || i == i + 4 || j == j + 4) {
            string += "*";
        } else {
            string += " ";

        }
    }
    string += "\n";
}
console.log(string);