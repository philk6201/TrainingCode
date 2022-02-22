let n = 10;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (l = 1; l <= (2 * i) - 1; l++) {
        let x = String.fromCharCode(64 + count)
        string += x + " ";
        count++;
        if (count >= 26) {
            count = 1;
        }


    }
    string += "\n";
}
console.log(string);