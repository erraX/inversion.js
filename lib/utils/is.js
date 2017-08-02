/**
 * @file detect types
 * @author erraX
 */

const toString = Object.prototype.toString

export default {
    function(target) {
        return toString.call(target) === '[object Function]'
    },

    object(target) {
        return toString.call(target) === '[object Object]'
    },

    number(target) {
        return toString.call(target) === '[object Number]'
    },

    array(target) {
        return toString.call(target) === '[object Array]'
    },

    string(target) {
        return toString.call(target) === '[object String]'
    },
}
