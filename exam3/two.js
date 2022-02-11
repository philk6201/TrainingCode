let string = "";
let n = 5;
for (i = 1; i <= n; i++) {
    for (j = 0; j <= n - i; j++) {
        string += "*";
    }
    for (j = 2; j <= 2 * i; j++) {
        string += " ";
    }
    for (k = 1; k <= (n - i) + 1; k++) {
        string += "*";
    }
    string += "\n";
}

//second part.

for (i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        string += "*";
    }

    for (j = 1; j <= 2 * n - 2 * i + 1; j++) {

        string += " ";
    }
    // for (k = 1; k <= i; k++) {
    //     string += "*";
    // }
    for (k = i; k > 0; k--) {
        string += "*";
    }
    string += "\n";

}
console.log(string);