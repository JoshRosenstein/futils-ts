import values from './values'

const data = [
    [null, []],
    [undefined, []],
    [false, []],
    [0, []],
    ["", []],
    ["foo", ["f", "o", "o"]],
    [[], []],
    [[1, 2, 3], [1, 2, 3]],
    [new Array(2), [undefined, undefined]],

    [new Uint8Array([10, 20]), [10, 20]],

    [{}, []],
    [{x: 1}, [1]],
    [{x: 1, y: 2, z: 3}, [1, 2, 3]],
    [{y: "bar", 1: "x", 2: "y", 0: "z", x: "foo"}, ["z", "x", "y", "bar", "foo"]],

    [Object.create(null), []],

    [new Set([1, 2, 3]), [1, 2, 3]],
    [new Set([1, 1]), [1]],
    [new Set(), []],

    [new Map(), []],
    [new Map([[1, 2], [3, 4]]), [2, 4]],
    [new Map([[1, 2], [1, 2]]), [2]],

    [new WeakSet(), []],
    [new WeakMap(), []],
];

test.each(data)("KV.values(%O) === %o", (value, expected) => {
    expect(values(value)).toStrictEqual(expected);
});