/**
 * @file createWithArgs
 * @author erraX
 */

/**
 * create new instance using apply arguments
 *
 * If you want to do this: 
 *
 * // Foo constructor
 * function Foo(arg1, arg2, arg3) {}
 * 
 * // We got arguments
 * var args = ['arg1', 'arg2', 'arg3'];
 *
 * // apply `args` Array to Foo
 * var foo = createWithArgs(Foo, args);
 *
 * // Avoid doing this
 * var foo = new Foo(args[0], args[1], args[2]);
 *
 * @param {Class} Cls Cls to create
 * @param {Array<any>} args args
 */
export default function createWithArgs(Cls, args) {
    return new (Cls.bind.apply(Cls, [ Cls, ...args ]))()
}
