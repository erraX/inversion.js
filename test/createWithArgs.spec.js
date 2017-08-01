import createWithArgs from '../lib/utils/createWithArgs'

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    say() {
        return `name: ${this.name}, age: ${this.age}`
    }
}

describe('createWithArgs', () => {
    it('should be instanceof original Cls', () => {
        const person = createWithArgs(Person)
        expect(person instanceof Person).toBeTruthy()
    })

    it('should pass arguments with array', () => {
        const person = createWithArgs(Person, ['zemin', 'infinity'])
        expect(person.say()).toBe('name: zemin, age: infinity')
    })
})
