// Celsius to Fahrenheit
function celToFah(cel){
    let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
    return fahrenheit;
}

// Fahrenheit to Celsius
function fahToCel(fah){
    let celsius = ((fah - 32) * 5 / 9).toFixed(1);
    return celsius;
}
function calculateTemp(){
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp-diff'); 
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;
    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}