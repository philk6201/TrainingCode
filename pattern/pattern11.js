let n = 5;
let string = "";
for (i = 1; i <= n; i++) {
    string += "*";

    for (j = 2; j <= n; j++) {


        string += "*";
    }
    string += "\n";

}
console.log(string);