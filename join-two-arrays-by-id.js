/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    /* const idsOfArr1 = [];
    const joinedArr = arr1.map((item) => {
        idsOfArr1.push(item.id)
        const matchingItem = arr2.find((element) => element.id === item.id);
        return matchingItem ? { ...item, ...matchingItem } : item;
    });
    for (let i = 0; i < arr2.length; i++) {
        const item = arr2[i];
        if (!idsOfArr1.includes(item.id)) joinedArr.push(item);
    }
    return joinedArr.sort((a, b) => a.id - b.id); */
    const map = new Map();
    const joinedArr = [];
    for (const obj of arr1) {
        map.set(obj.id, obj);
        joinedArr.push(obj);
    }
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            const existingObj = map.get(obj.id);
            Object.assign(existingObj, obj);
        } else {
            map.set(obj.id, obj);
            joinedArr.push(obj);
        }
    }
    joinedArr.sort((a, b) => a.id - b.id);
    return joinedArr;
};

const arr1 = [{ "id": 1, "x": 2, "y": 3 }, { "id": 2, "x": 3, "y": 6 }];
const arr2 = [{ "id": 2, "x": 10, "y": 20 }, { "id": 3, "x": 0, "y": 0 }];
console.log(join(arr1, arr2));
