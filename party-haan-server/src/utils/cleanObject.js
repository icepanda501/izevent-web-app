export default (obj, removeEmptyString) => {
    const keys = Object.keys(obj);
    const cleanedObject = {};
    keys.forEach((key) => {
      if (isObject(obj[key])) {
        cleanedObject[key] = cleanObject(obj[key], removeEmptyString);
      } else if (Array.isArray(obj[key])) {
        cleanedObject[key] = clean(obj[key], removeEmptyString);
      } else if (obj[key] !== undefined && obj[key] !== null) {
        if (removeEmptyString) {
          if (obj[key] !== '') {
            cleanedObject[key] = obj[key];
          }
        } else {
          cleanedObject[key] = obj[key];
        }
      }
    });
    return cleanedObject;
  };