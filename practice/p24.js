var n = 8;
for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= n; j++) {
        if (i == 0 || j == 0 || i == n || j == n)
            document.write("*");

        else if (i % 2 == 0 && (j != 1) && j != (n - 1))
            document.write("*");

        else
            document.write("_");
    }
    document.write("<br />");
}