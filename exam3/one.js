let string = "";
let n = 5;

for (i = 1; i <= n; i++) {
    for (j = i; j >= 1; j--) {
        string += j;

    }
    string += "\n";
}
console.log(string);