const insertArr = (arr1, arr2, index) => { 
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "One or both inputs are not arrays.";
    }
    if (index < 0 || index > arr1.length) {
        return "Index out of bounds.";
    } 
    const newArr = [...arr1.slice(0, index), ...arr2, ...arr1.slice(index)];
    return newArr;
};

console.log(insertArr([1, 2, 3, 7, 8], [4, 5, 6], 3));
//[1, 2, 3, 4, 5, 6, 7, 8]

console.log(insertArr(["a", "b", "e", "f"], ["c", "d"], 2));
//['a', 'b', 'c', 'd', 'e', 'f']

console.log(insertArr([1, 2, 3], [9, 9], 10));
// Index out of bounds.

console.log(insertArr("notAnArray", [1, 2], 1));
//One or both inputs are not arrays.
