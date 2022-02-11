let string = "";
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5 - i; j++) {
        string += " ";
    }
    for (k = 1; k <= (2 * i) - 1; k++) {
        string + "*";
        if (k == 1 || k == 2 * i - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";

}
for (let i = 1; i <= 4; i++) {

    for (let j = 0; j < i; j++) {
        string += " ";
    }

    for (k = (5 - i) * 2 - 1; k >= 1; k--) {
        if (k === 1 || k === (5 - i) * 2 - 1) {
            string += "*";
        } else {
            string += " ";
        }
    }
    string += "\n";
}

console.log(string);