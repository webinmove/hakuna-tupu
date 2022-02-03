class HakunaTupu {
  constructor (options) {
    const defaultOptions = {
      removeEmptyArrays: true,
      removeEmptyObjects: true,
      removeEmptyStrings: true,
      removeUndefined: true,
      removeNull: true
    };

    this.options = {
      ...defaultOptions,
      ...options
    };
  }

  removeEmpty (obj) {
    const finalObj = {};
    Object.keys(obj).forEach((key) => {
      if (Array.isArray(obj[key]) && Object.getPrototypeOf(obj[key]) !== Object.prototype) {
        if (obj[key].length || !this.options.removeEmptyArrays) {
          finalObj[key] = obj[key].map(element => {
            if (Object.getPrototypeOf(element) === Object.prototype) {
              return this.removeEmpty(element);
            }

            return element;
          });
        }
      } else {
        if (obj[key] && typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
          if (Object.keys(obj[key]).length !== 0) {
            const nestedObj = this.removeEmpty(obj[key]);
            if (Object.keys(nestedObj).length) {
              finalObj[key] = nestedObj;
            }
          }

          if (Object.keys(obj[key]).length === 0 && !this.options.removeEmptyObjects) {
            finalObj[key] = obj[key];
          }
        } else if (obj[key] !== '' && obj[key] !== undefined && obj[key] !== null) {
          finalObj[key] = obj[key];
        } else if (obj[key] === '' && !this.options.removeEmptyStrings) {
          finalObj[key] = obj[key];
        } else if (obj[key] === undefined && !this.options.removeUndefined) {
          finalObj[key] = obj[key];
        } else if (obj[key] === null && !this.options.removeNull) {
          finalObj[key] = obj[key];
        }
      }
    });
    return finalObj;
  }
}

module.exports = HakunaTupu;
