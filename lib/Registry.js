/**
 * @file Registry
 * @author erraX
 */

import ServiceEntry from './ServiceEntry'

/**
 * Registry
 *
 * @class
 */
export default class Registry {

    /**
     * Init
     *
     * @constructor
     */
    constructor() {
        this._service = {}
    }

    /**
     * registry an service
     *
     * @param {Object} options options
     * @param {Class} options.module module
     * @param {Array} options.deps deps
     * @param {Function} options.factory factory
     */
    registry({ name, ...rest }) {
        if (this.get(name)) {
            return false
        }

        this._service[name] = new ServiceEntry(rest)
    }

    /**
     * Get service from name
     *
     * @param {string} name service name
     * @return {any} service instance
     */
    get(name) {
        return this._service[name] && this._service[name].getInstance()
    }
}
