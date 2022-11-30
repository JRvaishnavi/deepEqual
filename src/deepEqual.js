const isObject = (data) => {
  return typeof data === "object" && !Array.isArray(data);
};

const isNull = (data) => {
  return data === null;
};
const isUndefined = (data) => {
  return data === undefined;
};

const deepEqual = (a, b) => {
  let atype = typeof a;
  let btype = typeof b;

  if (atype === btype) {
    //Check for undefined
    if (isUndefined(a) || isUndefined(b)) {
      return isUndefined(a) && isUndefined(b);
    }
    // check for null
    if (isNull(a) || isNull(b)) {
      return isNull(a) && isNull(b);
    }
    // deep check obj value
    if (isObject(a) && isObject(b)) {
      const mergeObj = Object.assign({}, a, b);
      return Object.keys(mergeObj)
        .map((el) => {
          return a[el] === b[el];
        })
        .every((el) => el === true);
    }
  } else {
    return false;
  }
};

module.exports = deepEqual;
