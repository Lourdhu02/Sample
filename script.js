let countel = document.getElementById("change")

console.log(countel)
let count = 0

function increment() {
    count = count + 1;
    countel.innerText = count
    console.log(countel)
}

function decrement() {
    count = count - 1;
    countel.innerText = count
    consol.log(countel)
}