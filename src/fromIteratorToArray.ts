
type IteratorType = {
    next: () => {
      value: null | any,
      done: boolean,
    },
  }

const fromIteratorToArrayIterator = (list:any[]):Function => (iterator:IteratorType):any[] => {
    const { value, done } = iterator.next()
  
    if (done) {
      return list
    }
  
    return fromIteratorToArrayIterator([...list, value])(iterator)
  }
  
 export const fromIteratorToArray_= (iterator:IteratorType) => fromIteratorToArrayIterator([])(iterator)


  export default fromIteratorToArray_