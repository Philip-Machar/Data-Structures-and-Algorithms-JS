const recursive_binary_search = (array, target, first = 0, last = array.length - 1) => {
    if (first > last) {
        return -1;
    };

    let midpoint = Math.floor((first + last) / 2);

    if (array[midpoint] === target) {
        return midpoint;
    } else if (array[midpoint] < target) {
        return recursive_binary_search(array, target, midpoint + 1, last);
    } else {
        return recursive_binary_search(array, target, first, midpoint - 1);
    };
};

console.log(recursive_binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));


