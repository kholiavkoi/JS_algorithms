// Big-O = O(n)

const fibonacci = (num) => {
	const fib = [0, 1]
	for (let i = 2; i < num; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}

	return fib
}

console.log(fibonacci(7)) // [0, 1, 1, 2, 3, 5, 8]