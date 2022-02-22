let n = 5;
let string = "";
let k = 0;
for (i = 1; i <= n; i++) {
    if (i % 2 != 0) {
        for (j = 1 + k; j <= k + i; j++) {
            string += j + " "
            j++;
        }
    }
    string += "\n";
}
console.log(string);