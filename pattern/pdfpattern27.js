let n = 5;
let string = "";
let count = 1;

for (let i = 1; i <= n; i++) {
    for (j = 0; j < n - i; j++) {
        string += " ";
    }

    for (let j = 1; j <= i; j++) {
        string += count;
        string += " ";
        count++;
    }
    string += "\n";
}
console.log(string);