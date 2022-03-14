let a = "my name is anik";
let l = a.length;

let string = "";
for (i = 1; i < l; i++) {
    for (j = 1; j < l; j++) {
        if (i == n) {
            string += a[j];
        } else if (j == n) {
            string += a[i];
        } else if (i == l - 1) {
            string += a[l - j - 1];

        } else if (j == l - 1) {
            string += a[l - i - 1];
        } else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);