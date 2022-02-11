let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {


    for (let j = n; j > i; j--) {
        string += " ";
    }

    for (let k = 0; k < i * 2 - 1; k++) {
        if (k === 0 || k === 2 * i - 2) {
            string += "*";
        } else {
            string += " ";


        }
    }
    string += "\n";
}
for (s = 1; s <= 10; s++) {
    string += "*";
}



console.log(string);