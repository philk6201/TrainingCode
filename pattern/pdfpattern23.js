let n = 5;
let string = "";

for (i = 1; i <= n; i++) {
    for (k = 1; k <= i; k++) {

        if (k % 2) {
            string += 0;
        } else {
            string += 1;
        }


    }
    string += "\n";
}
console.log(string);