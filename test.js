const linear_search = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return null;
};

const verify = (index) => {
    if (index !== null) {
        console.log(`Target found at index: ${index}`);
    } else {
        console.log('Target found not found in the array');
    };
};

const result = linear_search([1, 2, 3, 4, 5], 3);

verify(result);


//Do the current binary search before learning about the next binary search
