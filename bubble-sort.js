function bubbleSort(array) {
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

module.exports = bubbleSort;
