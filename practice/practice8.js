let string = "";
let n = 7;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j == 1 || i == n || i == j) {
            string += "*";
        } else {
            string += " ";
        }


    }
    string += "\n";
}
console.log(string);