function binarySearch(array, searchTerm) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			if (array[mid] === searchTerm) {
					return mid; // Return the index of the found element
			} else if (array[mid] < searchTerm) {
					left = mid + 1;
			} else {
					right = mid - 1;
			}
	}

	return -1; // Return -1 if the searchTerm is not found in the array
}

module.exports = binarySearch;
