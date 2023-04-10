// O(mn)
function cartesianProduct(arr1, arr2) {
	const res = []

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			res.push([arr1[i], arr2[j]])
		}
	}

	return res
}

console.log(cartesianProduct([1, 2], [3, 4, 5]))  // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]