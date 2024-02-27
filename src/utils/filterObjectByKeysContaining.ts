function filterObjectByKeysContaining(
    obj: Record<PropertyKey, any>,
    prefixes: string[],
) {
    return Object.keys(obj)
        .filter((key) => prefixes.some((prefix) => key.includes(prefix)))
        .reduce((acc: Record<PropertyKey, any>, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
}


export default filterObjectByKeysContaining