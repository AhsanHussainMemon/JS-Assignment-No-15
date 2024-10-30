var outputscreen = document.getElementById("outputscreen");

function display(value) {
    var lastChar = outputscreen.value.slice(-1);

    if ("+-*/".includes(value)) {
        if ("+-*/".includes(lastChar)) {
            return;
        }
    }
    outputscreen.value += value;
}

function clearScreen() {
    outputscreen.value = "";
}

function del() {
    outputscreen.value = outputscreen.value.slice(0, -1);
}

function Calculate() {
 
    if (!"+-*/".includes(outputscreen.value.slice(-1))) {
        outputscreen.value = eval(outputscreen.value);
    }
}
