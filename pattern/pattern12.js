let n = 5;
let string = "";
for (i = 0; i < n; i++) {
    for (j = 0; j < n - i; j++) {

        string += "*";
    }

    string += "\n";
}
for (i = 2; i <= n; i++) {
    for (j = 0; j < i; j++) {

        string += "*";
    }
    string += "\n";
}
console.log(string);