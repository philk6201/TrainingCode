let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
    for (j = i; j >= 1; j--) {
        string += j + " ";


    }
    string += "\n";
}
console.log(string);