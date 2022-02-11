let string = "";
let n = 10;
let i;
for (i = 0; i <= n; i = i + 2) {
    for (let j = 0; j <= i; j++)
        string += (n - j + " ");
    string += "\n";
}
console.log(string);