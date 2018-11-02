import {type_} from './type'
import isNil from 'typed-is/lib/isNil'
import {curry2_} from './curry2_'
 // TODO: ADD TYPES

export const merge_= (left, right) => {
  if(isNil(left)) return right
  if(isNil(right)) return left
  if (type_(left) !== type_(right)) {
    throw new Error(
      `merge received a ${type_(left)} and ${type_(
        right
      )} which aren't the same`
    )
  }
  switch (type_(left)) {
  case 'Array': {
    return [...left, ...right]
  }

  case 'Object': {
    return {
      ...left,
      ...right
    }
  }

  case 'Map': {
    return new Map([...left, ...right])
  }

  case 'Set': {
    return new Set([...left, ...right])
  }

  case 'String': {
    return `${left}${right}`
  }

  default: {
    throw new Error(`merge doesn't know how to deal with ${type_(left)}`)
  }
  }
}



const merge= curry2_(merge_)

export default merge