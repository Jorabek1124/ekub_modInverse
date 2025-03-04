import { gcd } from './gcd.js';

export function modInverse(a, m) {
    let m0 = m, t, q;
    let x0 = 0, x1 = 1;

    if (gcd(a, m) !== 1) {
        return "Teskari element mavjud emas";
    }

    while (a > 1) {
        q = Math.floor(a / m);
        t = m;
        m = a % m;
        a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }

    if (x1 < 0) {
        x1 += m0;
    }

    return x1;
}
