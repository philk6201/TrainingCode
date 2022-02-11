let n = 10;
let string = "";
let count = 1;

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= (2 * i) - 1; k++) {

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