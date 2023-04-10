// linear search
// O(n)
const linearSearch = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) return i
	}
	return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10))  // 2


// binary search
// O(log n)
const binarySearch = (arr, target) => {
	let leftIndex = 0
	let rightIndex = arr.length - 1

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
		if (arr[middleIndex] === target) return middleIndex

		if (arr[middleIndex] < target) {
			leftIndex = middleIndex + 1
		} else {
			rightIndex = middleIndex - 1
		}

	}

	return -1
}

console.log(binarySearch([-5, 2, 6, 10, 12, 15, 17], 12)) // 4


// recursive binary search
// O(log n)
const recursiveBinarySearch = (arr, target) => {
	return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) return -1

	let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
	if (arr[middleIndex] === target) return middleIndex

	if (arr[middleIndex] < target) {
		return search(arr, target, middleIndex + 1, rightIndex)
	} else {
		return search(arr, target, leftIndex, middleIndex - 1)
	}
}


console.log(recursiveBinarySearch([-5, 2, 6, 10, 12, 15, 17], 15)) // 5