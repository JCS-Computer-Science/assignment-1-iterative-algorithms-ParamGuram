function linearSearch(array, searchTerm) {
	/*
	** Check each element from start to finish
	** until you find an element that matches the search term
	**
	** Return the index of the found element
	*/

	for (let i = 0; i < array.length; i++) {
			if (array[i] === searchTerm) {
					return i; // Return the index of the found element
			}
	}

	return -1; // Return -1 if the searchTerm is not found in the array
}

module.exports = linearSearch;
