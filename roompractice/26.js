let a = "piyush"
let l = a.length;
let string = "";
for (i = 1; i < l; i++) {
    for (j = 1; j < l; j++) {
        if (i == 1) {
            string += a[j];
        } else if (j == 1) {
            string += a[i];
        } else if (i == l - 1) {
            string += a[l - j - 1]
        } else if (j === l - 1) {
            string += a[l - i - 1]
        } else {
            string += " ";
        }
    }
    string += "\n";
}
console.log(string);