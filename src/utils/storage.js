
/**
 * Retrieve a value from local storage.
 *
 * @param {string} key The key of the item to retrieve.
 * @returns {any} The parsed value from local storage, or null if the key does not exist.
 */
export const getLocalStorage = (key) => {
  try {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return null;
  }
};


/**
 * Set a value in local storage.
 *
 * @param {string} key The key to store under.
 * @param {any} value The value to store.
 */
export const setLocalStorage = (key, data) => {
  try {
    // Ensure that the data is not undefined or a function
    if (data === undefined || typeof data === 'function') {
      console.error("Invalid data for localStorage: ", data);
      return;
    }

    // Convert the data to JSON and store it in localStorage
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    // Handle errors such as quota exceeded or unavailable storage
    console.error("Error saving to localStorage:", error);
  }
};


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


/**
 * Check if an item exists in local storage.
 *
 * @param {string} key The key of the item to check.
 * @returns {boolean} true if the item exists, false otherwise.
 */
export const isStored = (key) => {
    return localStorage.getItem(key) !== null
}   