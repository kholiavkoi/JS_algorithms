// fibonacci
// O(2 ^ n) - recursive
const fibonacci = (n) => {
	if (n < 2) return n
	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(1)) // 1
console.log(fibonacci(6)) // 8

// factorial
// O(n)
const factorial = (n) => {
	if (n === 0) return 1

	return n * factorial(n - 1)
}


console.log(factorial(5)) // 5 * 4 * 3 * 2 * 1 = 120


