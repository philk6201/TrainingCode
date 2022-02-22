let n = 5;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= i - 1; j++) {
        string += " ";
    }
    for (k = 1; k <= (n - i) + 1; k++) {
        let x = String.fromCharCode(64 + count)
        string += x;
        count++;
    }
    string += "\n";
}
console.log(string);