"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};
const { id, date } = obj;
console.log(id);
console.log(date);
console.log(obj.items[0]?.description);
const total = obj.items.reduce((acc, a) => acc + (a.price * a.quantity), 0);
console.log(total);
function soma1(...numbers) {
    return numbers.reduce((total, atual) => total + atual, 0);
}
function soma2(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i] ?? 0;
    }
    return total;
}
function soma3(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log(soma1(1, 4, 5, 6));
console.log(soma2(5, 7, 9));
console.log(soma3(500, 34, -50));
//# sourceMappingURL=destructuring.js.map