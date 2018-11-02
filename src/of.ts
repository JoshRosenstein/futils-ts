import {type_} from './type'
import {curry3_} from './curry3'

// TODO:TYPES

export const of_= (key, value, functor) => {
  switch (type_(functor)) {
    case 'Array': {
      return [value]
    }
    case 'Object': {
      return {[key]: value}
    }
    case 'Set': {
      return new Set([value])
    }
    case 'Map': {
      return new Map([[key, value]])
    }
    case 'String': {
      return `${value}`
    }

    default: {
      throw new Error(`of doesn't know how to type ${type_(functor)}`)
    }
  }
}

const of=curry3_(of_)

export default of