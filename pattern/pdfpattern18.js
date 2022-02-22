let n = 11;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= (2 * i) - 1; k++) {
        string + "*";
        if (k == 1 || k == 2 * i - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";

}
for (let i = 1; i <= n - 1; i++) {

    for (let j = 0; j < i; j++) {
        string += " ";
    }

    for (k = (n - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (n - i) * 2 - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";
}

console.log(string);