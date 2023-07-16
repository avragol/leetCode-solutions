/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: (valToCheck) => {
            if (val === valToCheck) {
                return true
            }
            throw 'Not Equal'
        },
        notToBe: (valToCheck) => {
            if (val !== valToCheck) {
                return true
            }
            throw 'Equal'
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */