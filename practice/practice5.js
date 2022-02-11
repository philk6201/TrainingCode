let n = 36;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j == n || i == j || i == 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";

}
console.log(string);