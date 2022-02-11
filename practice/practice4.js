let n = 10;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j <= n) {
            if (j > (n + 1) - i) {
                string += " ";
            } else {
                string += "*";
            }
        } else {
            if ((j - i) >= n) {
                string += "*";
            } else {
                string += " ";
            }
        }


    }

    //     for (l = 1; l <= n; l++) {

    //     }
    // }


    string += "\n";
}
console.log(string);