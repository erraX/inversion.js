export default function createWithArgs(Cls, args) {
    return new (Cls.bind.apply(Cls, [ Cls, ...args ]))()
}
