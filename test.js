const linear_search = (array, target) => {
    for (let i = 0; i < array.length; i++){
        if (array[i] === target) {
            return i
        }
    }
    return null;
}


const verify = (index) => {
    if (index !== null) {
        console.log(`target found at index: ${index}`);
    } else {
        console.log('target is not is in the array');
    }
};


verify(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5]));

