/**
 * Debounce function set timeout and clear timeout if function
 * is called before timeout callback execution
 * @param callback - func
 * @param params - [] - callback parameters
 * @param time - ms - timeout
 */

const debounce = (callback, params, time) => {
  clearTimeout(this.debounceTimeout);
  this.debounceTimeout = setTimeout(() => {
    callback(...params);
  }, time);
};

export default debounce;
