import {type_} from './type'

export const isEnumerable_= (value:any):value is EnumerableT => {
  switch (type_(value)) {
    case 'Array':
    case 'Object':
    case 'Map':
    case 'Set':
    case 'String': {
      return true
    }
    default: {
      return false
    }
  }
}

export default isEnumerable_