// Big-O = O(log n)

// const isPowerOfTwo = (n) => {
// 	if (n < 1) return false
// 	while (n > 1) {
// 		if (n % 2 !== 0) return false
// 		n = (n / 2)
// 	}
// 	return true
// }

// console.log(isPowerOfTwo(8)) // true
// console.log(isPowerOfTwo(5)) // false
// console.log(isPowerOfTwo(16)) // true
// console.log(isPowerOfTwo(13)) // false


// Big-O = O(1)

const isPowerOfTwoBitWise = (n) => {
	if (n < 1) return false
	return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitWise(8)) // true
console.log(isPowerOfTwoBitWise(5)) // false
console.log(isPowerOfTwoBitWise(16)) // true
console.log(isPowerOfTwoBitWise(13)) // false