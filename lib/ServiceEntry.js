/**
 * @file SerficeEntry
 * @author erraX
 */

import is from './utils/is'
import createWithArgs from './utils/createWithArgs'

/**
 * @class
 *
 * ServiceEntry
 */
export default class ServiceEntry {

    /**
     * @constructor
     *
     * @param {Registry} registry registry
     * @param {Object} options options
     * @param {string} options.name service name
     * @param {Class} options.module module
     * @param {Array} options.deps deps
     * @param {Function} options.factory factory
     */
    constructor(registry, options) {
        this.registry = registry
        this.options = options

        this.instance = null

        this.create()
    }

    /**
     * Get instance
     *
     * @return {Module} module
     */
    getInstance() {
        return this.instance
    }

    /**
     * Create service
     */
    create() {
        const { module, deps, factory } = this.options

        if (!is.function(module)) {
            throw new Error('`module` must be an constructor')
        }

        this.instance = createWithArgs(module, deps)
    }
}
