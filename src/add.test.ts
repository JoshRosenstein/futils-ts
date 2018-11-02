import add from './add'

describe('add', () => {
  it('adds two numbers', () =>{
  const res:number=add(1, 2)
    expect(res).toEqual(3)
  }
  )

  it('is curried', () =>{
    const a:(b:number)=>number=add(1)
    const res:number=add(1)(2)
    expect(res).toEqual(3)
  }
  )


})