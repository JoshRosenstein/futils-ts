import reduceRight from './reduceRight'

describe('reduceRight', () => {
  const avg = function(a:number, b:number) {
    return (a + b) / 2
  }

  it('folds lists in the right order', () => {
    expect(reduceRight((a:string, b:string) => a + b, '', ['a', 'b', 'c', 'd'])).toEqual(
      'abcd',
    )
  })

  it('folds lists in the right order', () => {
    expect(reduceRight((a:number, b:number) => a - b, 0, [1, 2, 3, 4])).toEqual(-2)
  })
})
