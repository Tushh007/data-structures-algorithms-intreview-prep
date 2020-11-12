// Objects: Unordered, key value pairs => fast access/insertion and removal

// Operation Complexities
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n) -> checking the values not keys | searching keys are constant 
// Access - O(1)

let instructor = {
    firstName: 'Tushar',
    isInstructor: true,
    favouriteNumbers: [1, 5, 7, 19]
}

// Method Complexities
// Object.keys - O(n)
console.log(Object.keys(instructor))

// Object.values - O(n)
console.log(Object.values(instructor))

// Object.entries - O(n)
console.log(Object.entries(instructor))

// hasOwnProperty - O(1)
console.log(instructor.hasOwnProperty('firstName'))
