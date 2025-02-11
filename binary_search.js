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
        console.log('Target was not found in the list');
    }
};


const result = linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9);

verify(result);
