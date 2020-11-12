// General Rules:
// Arithmetic operations are constant
// Variable assignment is constant
// Accessing elements in  an array (by index) or objects (by keys) is constant
// In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

// O(n)
const addUpToSlow = (num) => {
    // cost = 5n + 2
    let total = 0 // = -> assignment operation => 1
    for (let i = 1; i <= num; i++) { // two assignment operation, 1 comparison operation, 1 increment operation => dependence on n
        total += i // addition and assignment operation => dependence on n
    }
    return total
}

// O(1)
const addUpToFast = (num) => {
    // cost = 3  
    return num * (num + 1) / 2 // *, +, / => three operations only
}

// O(2n) =>  O(n)
const countUpAndDown = (num) => {
    console.log('Going up')
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }

    console.log('At the top... Going Down')
    for (let j = num; j >= 1; j--) {
        console.log(j)
    }

    console.log('Back down! Bye...')
}

const printAllPairs = (num) => {
    // total: O(n * n)
    // outer loop: O(n)
    for (let i = 1; i <= num; i++) {
        // inner loop: O(n)
        for (let j = i; j <= num; j++) {
            console.log(i, j)
        }
    }
}


// O(n)
const logAtLeast5 = (num) => {
    for (let i = 0; i <= Math.max(5, num); i++) {
        console.log(i)
    }
}

// O(1)
const logAtMost5 = (num) => {
    for (let i = 0; i <= Math.min(5, num); i++) {
        console.log(i)
    }
}


console.log(addUpToSlow(10))
console.log(addUpToFast(10))
console.log(countUpAndDown(10))
console.log(printAllPairs(10))