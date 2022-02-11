let n = 5;
let string = "";
for (i = 1; i < n; i++) {
    for (j = 1; j < n - i; j++) {

        string += "*";
    }

    string += "\n";
}
for (let i = 1; i <= n; i++) {

    for (let j = 0; j < n - i; j++) {


        for (let k = 0; k < i; k++) {
            string += "*";
        }
    }
    string += "\n";
}
console.log(string);