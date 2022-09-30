const inputNumber = document.getElementById("input-number");
const btn = document.getElementById("submit");

btn.addEventListener("click", updateInput);

function updateInput(){
    document.getElementById("end-number").innerHTML = inputNumber.value;
   let randomNum = Math.floor(Math.random() * inputNumber.value) + 1;

    document.getElementById("random-num").innerHTML = randomNum;
}