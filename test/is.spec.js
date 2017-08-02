import is from '../lib/utils/is'

const func = () => {}
const array = []
const string = ''
const obj = {}
const number = 1
const neil = null
const undef = undefined

const typeList = [func, array, obj, string, number, neil, undef]

function testEach(func, targets, toBe) {
    targets.forEach(target => expect(func(target)).toBe(toBe))
}

function byPass(func, targets, except) {
    const truthy = targets.filter(t => t === except)
    const falsy = targets.filter(t => t !== except)

    testEach(func, truthy, true)
    testEach(func, falsy, false)
}

describe('is', () => {
    it('should be function', () => {
        byPass(is.function, typeList, func);
    })

    it('should be number', () => {
        byPass(is.number, typeList, number);
    })

    it('should be object', () => {
        byPass(is.object, typeList, obj);
    })

    it('should be array', () => {
        byPass(is.array, typeList, array);
    })

    it('should be string', () => {
        byPass(is.string, typeList, string);
    })
})
