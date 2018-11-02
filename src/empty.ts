
import {type_} from './type'
import hasMethod_ from './_internal/hasMethod';
import isObject from 'typed-is/lib/isObject';
// TODO:TYPES

type Self=<T>(value:T)=>T

export const empty_:Self=(value)=> {
  const t=type_(value)
  switch (t) {
  case 'null': {
    return null
  }
  case 'undefined': {
    return undefined
  }
  case 'String': {
    return ''
  }
  case 'Array': {
    return []
  }
  case 'Object': {
    return {}
  }
  case 'Map': {
    return new Map()
  }
  case 'Set': {
    return new Set()
  }

  default: {
if(hasMethod_(value,'empty')){
    return value.empty()
}

  }
  }
}

export default empty_