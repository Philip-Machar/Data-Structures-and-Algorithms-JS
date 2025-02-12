const binary_search = (array, target) => {
    let first = 0;
    let last = array.length - 1;

    while (first <= last) {
        let midpoint = Math.floor((first + last)/2);

        if (array[midpoint] === target) {
            return midpoint;
        } else if (array[midpoint] < target) {
            first = midpoint + 1;
        } else if (array[midpoint] > target) {
            last = midpoint - 1;
        };
    };

    return null;
};

const verify = (index) => {
    if (index !== null) {
        console.log(`Target was found at index: ${index}`);
    } else {
        console.log('Target was not found in the array');
    };
};

 

verify(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
