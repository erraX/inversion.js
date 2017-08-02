/**
 * @file detect types
 * @author erraX
 */

/**
 * toString shortcut
 * from `Object.prototype`
 *
 * @type {Function}
 */
const toString = Object.prototype.toString

export default {

    /**
     * Detect Function
     *
     * @param {any} target target
     * @return {boolean} is Function or not
     */
    function(target) {
        return toString.call(target) === '[object Function]'
    },

    /**
     * Detect Object
     *
     * @param {any} target target
     * @return {boolean} is Object or not
     */
    object(target) {
        return toString.call(target) === '[object Object]'
    },

    /**
     * Detect number
     *
     * @param {any} target target
     * @return {boolean} is number or not
     */
    number(target) {
        return toString.call(target) === '[object Number]'
    },

    /**
     * Detect Array
     *
     * @param {any} target target
     * @return {boolean} is Array or not
     */
    array(target) {
        return toString.call(target) === '[object Array]'
    },

    /**
     * Detect string
     *
     * @param {any} target target
     * @return {boolean} is string or not
     */
    string(target) {
        return toString.call(target) === '[object String]'
    },
}
