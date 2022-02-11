let n = 5;
let string = "";
let count = 1;

for (i = 0; i <= n; i++) {
    for (j = 1; j <= i; j++) {
        string += " ";
    }
    for (k = 1; k <= n - i; k++) {

        let x = String.fromCharCode(64 + j);
        string += x;
        count++;
    }
    string += "\n";
}
console.log(string);