import ServiceEntry from './ServiceEntry'

export default class Registry {
    constructor() {
        this._service = {}
    }

    registry({ name, ...rest }) {
        if (this.get(name)) {
            return false
        }

        this._service[name] = new ServiceEntry(rest)
    }

    get(name) {
        return this._service[name] && this._service[name].getInstance()
    }
}
