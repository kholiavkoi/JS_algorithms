// Big-O = O(n)
const factorial = (n) => {
	let result = 1
	for (let i = 2; i <= n; i++) {
		result = result * i
	}

	return result
}

console.log(factorial(4)) // 4 * 3 * 2 * 1 = 24