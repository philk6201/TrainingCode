let n = 5;

let string = "";

for (i = n; i > 0; i--) {

    for (j = 1; j < (2 * n); j++) {

        if (j < i) {

            string += " ";

        } else {

            if (j > (2 * n - i)) {

                continue;

            } else {

                if (j > n) {

                    string += (2 * n) - j + "";

                } else {

                    string += j + "";

                }
            }
        }

    }
    string += "\n";

}
console.log(string);