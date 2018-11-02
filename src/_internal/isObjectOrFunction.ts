import isFunction from 'typed-is/lib/isFunction'
import isObject from 'typed-is/lib/isObject'

export const isObjectOrFunction_=(value: any): value is object =>{
    return isObject(value) || isFunction(value);
}

export default isObjectOrFunction_