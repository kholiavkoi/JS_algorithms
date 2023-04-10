// Big-O = O(sqrt(n))

const isPrime = (num) => {
	if (num < 2) return false

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false
		}
	}

	return true
}

console.log(isPrime(5)) // true 1*5 or 5*1
console.log(isPrime(4)) // false 1*4, 4*1, 2*2
console.log(isPrime(15)) // false
