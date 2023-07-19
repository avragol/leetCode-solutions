/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    const bizzis = [];
    for (let i = 0; i < intervals.length; i++) {
        for (let j = 0; j < intervals.length; j++) {
            if (j !== i) {
                if (intervals[i][0] <= intervals[j][1] && intervals[i][1] >= intervals[j][0]) {
                    if (!bizzis.includes(intervals[i])) bizzis.push(intervals[i]);
                }
            }
        }
    }
    return bizzis;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));