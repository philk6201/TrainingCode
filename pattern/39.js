let n = 10;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (j = 1; j <= (2 * i) - 1; j++) {
        let x = String.fromCharCode(64 + count);
        string += x + " ";
        count++;
        if (count >= 26) {
            count = 1;
        }
    }
    string += "\n";
}
console.log(string);