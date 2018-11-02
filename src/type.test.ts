import typeFn from './type'

describe('typeFn', () => {
  it('Works', () => {
    expect(typeFn('a')).toEqual('String')
    expect(typeFn(1)).toEqual('Number')
    expect(typeFn({})).toEqual('Object')
    expect(typeFn([])).toEqual('Array')
    expect(typeFn(true)).toEqual('Boolean')
    expect(typeFn(false)).toEqual('Boolean')
    expect(typeFn(null)).toEqual('null')
    expect(typeFn(undefined)).toEqual('undefined')
    expect(typeFn(undefined)).toEqual('undefined')
    expect(typeFn(new Map([['aaa', 'a'], ['bbb', 'b'], ['ccc', 'c']]))).toEqual(
      'Map',
    )
    expect(typeFn(new Set(['a', 'b', 'c']))).toEqual('Set')
  })
})
