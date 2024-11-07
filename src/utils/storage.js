
/**
 * Retrieve a value from local storage.
 *
 * @param {string} key The key of the item to retrieve.
 * @returns {any} The parsed value from local storage, or null if the key does not exist.
 */
export const getLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
};

/**
 * Set a value in local storage.
 *
 * @param {string} key The key to store under.
 * @param {any} value The value to store.
 */
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}   

/**
 * Remove an item from local storage.
 *
 * @param {string} key The key of the item to remove.
 */
export const removeLocalStorage = (key) => {
    localStorage.removeItem(key)
}   

/**
 * Add a value to an array stored in local storage.
 *
 * If the array does not exist under the given key, it initializes a new array.
 *
 * @param {string} key The key under which the array is stored.
 * @param {any} value The value to add to the array.
 */
export const addLocalStorage = (key, value) => {
    let arr = getLocalStorage(key) || []
    arr.push(value)
    setLocalStorage(key, arr)
}

/**
 * Check if an item exists in local storage.
 *
 * @param {string} key The key of the item to check.
 * @returns {boolean} true if the item exists, false otherwise.
 */
export const isStored = (key) => {
    return localStorage.getItem(key) !== null
}   