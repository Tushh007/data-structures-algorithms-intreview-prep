/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object
that have typeof string.
*/

const collectStrings = (obj) => {
  let values = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      values.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      values = values.concat(collectStrings(obj[key]));
    }
  }

  return values;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
