import append from './append'

describe('append', () => {
  it('Works', () => {
    expect(append('c')('ab')).toEqual('abc')
    expect(append('px')(1)).toEqual('1px')

  })

  it('Appends Value to end of Array', () => {

    expect(append('a')(['b'])).toEqual(['b', 'a'])

  

  })

  it('Numbers to string', () => {
    expect(append(1)(1)).toEqual('11')

  })
})
