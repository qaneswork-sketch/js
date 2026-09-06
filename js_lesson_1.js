function* fibonacciGenerator() {
	let prev = 0, next = 1;
    while (true) {
        yield prev;
        let temp = prev;
        prev = next;
        next = temp + next; //[prev, next] = [next, prev + next] - деструктуризация
    }
}

const fibGen = fibonacciGenerator();

console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8