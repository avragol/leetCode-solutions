/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
    let newArr = JSON.parse(JSON.stringify(arr));
    let arrIndex = 0;
    let newArrIndex = 0;
    while (arrIndex < arr.length) {
        let chunky = [];
        for (let j = arrIndex; chunky.length < size; j++) {
            if (arr[j] != undefined) chunky = [...chunky, arr[j]]
            else break
        }
        newArr.splice(newArrIndex, size, chunky);
        arrIndex += size;
        newArrIndex++;
    }
    return newArr;
};

console.log(chunk([1, 9, 6, 3, 2], 3));