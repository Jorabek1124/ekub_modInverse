
import { gcd } from './gcd.js';
import { modInverse } from './modInverse.js';

// EKUB tugmasi bosilganda
document.getElementById("gcdBtn").addEventListener("click", function() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Iltimos, sonlarni kiriting!";
        return;
    }

    let result = gcd(a, b);
    document.getElementById("result").innerText = `EKUB(${a}, ${b}) = ${result}`;
});

// Modular teskari hisoblash tugmasi bosilganda
document.getElementById("modInvBtn").addEventListener("click", function() {
    let a = parseInt(document.getElementById("num1").value);
    let m = parseInt(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(m)) {
        document.getElementById("result").innerText = "Iltimos, sonlarni kiriting!";
        return;
    }

    let result = modInverse(a, m);
    document.getElementById("result").innerText = `Teskari element: ${result}`;
});
