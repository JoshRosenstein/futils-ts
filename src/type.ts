
/**
 * Returns the string value of the primative object given.
 * @param obj object to inspect primative type of
 * @sig a -> str
 * @example
 * type( 'test' )
 * // 'String'
 */

export const type_=(obj:any):'Set'| 'Map' | 'WeakMap' | 'Object' | 'Number' | 'Boolean' | 'String' | 'null' | 'Array' | 'RegExp' | 'Function' | 'undefined' => obj === null?'null':obj === undefined?'undefined':Object.prototype.toString.call(obj).slice(8, -1)

export default type_

