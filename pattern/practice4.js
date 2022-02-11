let a = "programmingspark";
let string = "";
let l = a.length;
for (i = 0; i < l; i++) {
    for (j = 0; j < l; j++) {
        if (i == 0) {
            string += a[i];
        } else if (j == 0) {
            string += a[j];
        } else if (i = l - 1) {
            string += a[j - l - 1];

        } else if (j = l - 1) {
            string += a[i - l - 1];
        } else {
            string += " ";
        }
        string += "\n";
    }
}
console.log(string);