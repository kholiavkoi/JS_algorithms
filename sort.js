// bubble sort
// O(n^2)
const bubbleSort = (arr) => {
	let isSwapped
	do {
		isSwapped = false
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				isSwapped = true
			}
		}
	} while (isSwapped)


	return arr
}

console.log(bubbleSort([-6, 20, 8, -2, 4]))  // [-6, -2, 4, 8, 20]


// insertion sort
// O(n^2)
const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i]
		let j = i - 1

		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j]
			j = j - 1
		}

		arr[j + 1] = numberToInsert
	}

	return arr
}

console.log(insertionSort([-6, 20, 8, -2, 4]))  // [-6, -2, 4, 8, 20]


// quick sort
// O(n log n)
const quickSort = (arr) => {
	if (arr.length < 2) return arr
	let pivot = arr[arr.length - 1]
	const left = []
	const right = []

	for (let i = 0; i < arr.length - 1; i++) {
		if (pivot > arr[i]) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([-6, 20, 8, -2, 4]))  // [-6, -2, 4, 8, 20]


// merge sort
// O(n log n)
const mergeSort = (arr) => {
	if (arr.length < 2) return arr

	const mid = Math.floor(arr.length / 2)
	const leftArr = arr.slice(0, mid)
	const rightArr = arr.slice(mid)

	return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
	const resultArr = []

	while (leftArr.length && rightArr.length) {
		if (leftArr[0] < rightArr[0]) {
			resultArr.push(leftArr.shift())
		} else {
			resultArr.push(rightArr.shift())
		}
	}

	return [...resultArr, ...leftArr, ...rightArr]
}

console.log(mergeSort([-6, 20, 8, -2, 4]))  // [-6, -2, 4, 8, 20]
