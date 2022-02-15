let n = 2;
let b = 7;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= (i * 2) + 1; k++) {
        string += "*";
    }
    string += " ";

    for (j = 1; j <= n - i; j++) {
        string += " ";
    }
    for (k = 1; k <= (i * 2) + 1; k++) {
        string += "*";
    }
    string += "\n";
}

n = 6;
for (let i = 0; i < n; i++) {

    for (let j = 0; j <= i - 1; j++) {
        string += " ";
    }
    for (let k = 0; k < 2 * (n - i) - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);