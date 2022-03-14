/** 
 * @param: String val
 * Comment: Get the value of the number selected and append to the result 
 */
function getSelectedNumberValue(val) {
    document.getElementById("result").value += val
}

/** 
 * @param: String val
 * Comment: Get the value of the symbol selected and append to the result 
 */
function getSelectedSymbolValue(val) {
    document.getElementById("result").value += val
}

/** 
 * @param: null
 * Comment: Get the final output for the selected number and symbol
 */
function getFinalOutput() {
    try {
        var x = document.getElementById("result").value
        var y = eval(x)
        document.getElementById("result").value = y
    } catch (err) {
        document.getElementById("result").value = 'Error'
    }
}

/**
 * @param: null
 * Comment: Get the clear result for the number,symbol and final outpout
 */
function clearResult() {
    document.getElementById("result").value = ""
}

/** 
 * @param: null
 * comment: Get Backspace result for  selected number,symbol & final output.
 */
function backspaceResult() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}