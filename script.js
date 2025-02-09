Module().then((wasmModule) => {
    window.wasm = wasmModule;
    console.log("WebAssembly yuklandi!");
});

function calculateFactorial() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText = "Xato! Iltimos, to‘g‘ri son kiriting.";
        return;
    }
    let result = wasm._wasm_factorial(num);
    document.getElementById("result").innerText = `Faktoriyal(${num}) = ${result}`;
}

function calculateFibonacci() {
    let num = parseInt(document.getElementById("number").value);
    if (isNaN(num) || num < 0) {
        document.getElementById("result").innerText = "Xato! Iltimos, to‘g‘ri son kiriting.";
        return;
    }
    let result = wasm._wasm_fibonacci(num);
    document.getElementById("result").innerText = `Fibonacci(${num}) = ${result}`;
}
