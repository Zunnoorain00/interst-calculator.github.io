function myFunction() {
    document.getElementById("range-value").innerText = document.getElementById("rate").value;
}

function compute() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let interest = (principal * years * rate) / 100;

    let result = document.getElementById("result");
    result.innerHTML = `Interest Rate : ${interest}`;
}
