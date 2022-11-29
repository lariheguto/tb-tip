const biLLImput = document.querySelector(".bill-input");
const peopleImput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");

biLLImput.addEventListener("input" , biLLImputFun);
peopleImput.addEventListener("input" , peopleImputFun);
tips.forEach(function(val){
    val.addEventListener("click" , handleClick);
})

biLLImput.value = "0.0";
peopleImput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function biLLImputFun(){
    billValue = parseFloat(biLLImput.value);
    calculateTip();
}

function peopleImputFun(){
    peopleValue = parseFloat(peopleImput.value);
    calculateTip();
}

function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML)/100
        }
    });
    calculateTip();  
}

function calculateTip() {
    if(peopleValue <=1){
        let tipAmount = (billValue * tipValue) / peopleValue
        let total = (billValue * tipAmount) / peopleValue
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }
}
