    let inputField = document.getElementById("inputNumberInputField");
    let convertBtn = document.getElementById("convertBtn");
    let lengthEl = document.getElementById("length-el");
    let volumeEl = document.getElementById("volume-el");
    let massEl = document.getElementById("mass-el")

    const meterToFeet = 3.281;
    const literToGallons = 0.264;
    const kilogramToPounds = 2.204;

convertBtn.addEventListener("click", function(){
    let baseValue = inputField.value
    lengthEl.textContent = `${baseValue}  = ${baseValue * meterToFeet} feet`
    volumeEl.textContent = `${baseValue}  = ${baseValue * literToGallons} gallon`
    massEl.textContent = `${baseValue}  = ${baseValue * kilogramToPounds} pounds`
    
})