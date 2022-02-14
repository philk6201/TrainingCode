let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n * 2; j++) {
        if (j / 2 > (n + 1) - i) {
            string += " ";
        } else {
            string += "*";
        }
        if (i <= n) {
            string += "*";
        } else {
            string += " ";
        }
    }

    //     for (l = 1; l <= n; l++) {

    //     }
    // }


    string += "\n";
}
console.log(string);