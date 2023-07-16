/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    let array = [...arr];
    for (let i = 0; i <= n - 1; i++) {
        let j = 0;
        while (j <= array.length - 1) {
            let itemLength = array[j].length;
            if (typeof array[j] === 'object') {
                if (array[j].length) {
                    for (let h = 1; h <= array[j].length - 1; h++) {
                        array.splice((j + h), 0, array[j][h]);
                    }
                    array.splice(j, 1, array[j][0]);
                    j += itemLength;
                } else {
                    array.splice(j, 1)
                    j++
                }
            } else { j++; }
        }
    }
    return array;
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flat(arr, 0));