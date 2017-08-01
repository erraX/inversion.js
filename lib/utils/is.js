/**
 * @file detect types
 * @author erraX
 */

const toString = Object.prototype.toString

export default {
    'function'(target) {
        return toString.call(target) === '[object Function]'
    },

    array(target) {
        return toString.call(target) === '[object Array]'
    },

    string(target) {
        return toString.call(target) === '[object String]'
    },
}
