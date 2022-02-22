let n = 5;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= i - 1; k++) {
        string += " ";
    }
    for (l = 1; l <= (n - i) + 1; l++) {
        let x = String.fromCharCode(64 + k)
        string += x;
        count++;
    }
    string += "\n";
}
console.log(string);