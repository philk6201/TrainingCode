function addby() {
    let num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    let sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").value = sum;
}

function multiplyBy() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").value = num1 * num2;
}

function devideby() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").value = num1 / num2;
}

function subtractby() {
    num1 = document.getElementById("firstnumber").value;
    num2 = document.getElementById("secondnumber").value;
    document.getElementById("result").value = num1 - num2;
}