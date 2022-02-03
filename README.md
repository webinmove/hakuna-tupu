# HakunaTupu

## Description

Hakuna Tupu means "no empty" in Swahili.

Util to remove empty string, undefined, null and empty arrays in nested objects and arrays

**Here is an exemple:**

```js
const hakunaTupu = new HakunaTupu({
  removeEmptyArrays: true,
  removeEmptyObjects: true,
  removeEmptyStrings: true,
  removeUndefined: true,
  removeNull: true
});

const result = hakunaTupu.removeEmpty(objectToEmpty);
```
