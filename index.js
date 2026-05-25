let num = 0;

let counter = document.getElementById("number");
let decrease = document.getElementById("decrease");
let increase = document.getElementById("increase");
let reset = document.getElementById("reset");

decrease.addEventListener("click", function() {
    counter.innerHTML = --num;
    color(num);
})
increase.addEventListener("click", function() {
    counter.innerHTML = ++num;
    color(num);
})
reset.addEventListener("click", function() {
    counter.innerHTML = num *= 0;
    color(num);
})








let color = function (n) {
    if (n > 0) {
        counter.style.color = "darkgreen";
    }else if (n < 0) {
        counter.style.color = "darkred";
    }else {
        counter.style.color = "#fff";
    }
}