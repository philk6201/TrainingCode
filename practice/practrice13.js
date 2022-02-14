let string = "";
let n = 11;

start = 2;
end = n - 2;
x = parseInt(n / 2);

for (k = 0; k < x; k++) {
    for (i = 0; i <= n; i++) {
        for (j = 0; j <= n; j++) {
            if (k == 0 && (i == 0 || j == 0 || i == n || j == n)) {
                string += "*"
            } else if ((i > start && i < end) && (j > start && j < end)) {
                string += " "

            } else if ((i >= start && i <= end) && (j >= start && j <= end)) {
                string += "*"
            } else {
                string += " "
            }
        }
        if (j != n) {
            string += "\n"
        }
    }
    start = start + 2;
    end = end - 2;
    k = k + 2;
}
console.log(string);