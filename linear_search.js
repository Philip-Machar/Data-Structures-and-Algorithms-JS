const linear_search = (list, target) => {
    for (let i = 0; i < list.length; i++){
        if (list[i] === target) {
            return i
        }
    }
    return null;
}


const verify = (index) => {
    if (index !== null) {
        console.log(`target found at index: ${index}`);
    } else {
        console.log('target is not is in the list');
    }
};


verify(linear_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19));




