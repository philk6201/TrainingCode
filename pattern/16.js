let string = "";
let n = 5;
for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j > (n + 1 - i)) {
            string += " ";
        } else {
            string += "*";
        }
    }
    for (l = 1; l <= n; l++) {
        if (i <= l) {
            string += "*";

        } else {
            string += " ";
        }

    }
    string += "\n";
}

for (i = 1; i <= n; i++) {
    for (j = 1; j <= n; j++) {
        if (j > (n - i + 1)) {
            string += "*";
        } else {
            string += " ";
        }
    }
    for (l = 1; l <= n; l++) {
        if (i <= l) {
            string += "*";

        } else {
            string += " ";
        }

    }
    string += "\n";
}





console.log(string);