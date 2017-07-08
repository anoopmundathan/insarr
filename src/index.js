const insArr = (arr, item, index) => {

    if (!arr) {
        return;
    }

    if(!Array.isArray(arr)) {
        return arr;
    }

    if(!item) {
        return arr;
    }
    
    arr.push(item);
    return arr;
}

export default insArr;