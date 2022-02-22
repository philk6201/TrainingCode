let n = 5;
let string = "";
let count = 1;
for (i = 1; i <= n; i++) {
    for (k = 1; k <= n - i; k++) {
        string += " ";
    }
    for (l = 1; l <= i; l++) {
        let x = String.fromCharCode(64 + count)
        string += x;
        count++;
    }
    string += "\n";
}
console.log(string);