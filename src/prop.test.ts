import prop from './prop'

describe('prop', () => {
  it('Object found key', () => {
    const a:string = prop('aaa',{aaa: '1'})
    const eA = '1'

    expect(a).toEqual(eA)
  })

  it('Object missing key', () => {
    const a:undefined = prop('bbb')({aaa: '1'})
    const eA = undefined

    expect(a).toEqual(eA)
  })

  it('undefined missing key', () => {
    const a:undefined = prop('bbb',undefined)
    const eA = undefined

    expect(a).toEqual(eA)
  })

  it('Array found key', () => {
    let a:string | undefined = prop(0,['aaa'])

    /// Type Check
    let b:string
    if(undefined !== a){
        b=a
    }
/// End Type Check
    const eA = 'aaa'

    expect(a).toEqual(eA)
  })

  it('Array missing key', () => {
    const a = prop(2,['aaa'])
    const eA = undefined

    expect(a).toEqual(eA)
  })

  it('Array string key', () => {
    const a = prop('0',['aaa'])
    const eA = 'aaa'

    expect(a).toEqual(eA)
  })

  it('String found key', () => {
    const a = prop(0,'abc')
    const eA = 'a'

    expect(a).toEqual(eA)
  })

  it('Map found key', () => {
    const a = prop('aaa')(new Map([['aaa', 'aaa']]))
    const eA = 'aaa'
   
    
    expect(a).toEqual(eA)
  })
})
 