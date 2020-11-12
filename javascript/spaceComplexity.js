// General Rule
// Most primitives (booloeans, numbers, undefined, null) are constant space
// String requires O(n) space (where n is the string length)
// Reference Types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

// O(1)
const sum = (arr) => {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// O(n)
const double = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i])
    }
    return newArr
}