import type_ from './type'
import isFunction from 'typed-is/lib/isFunction'
import { AnyFunction } from './helper-types';
import { IterableValues } from "./vendorTypes/ts-extra-types";

interface fromMappingI{
    [key: string]: AnyFunction
    Number:(o:number,v:string|number)=>string
    String:(o:string,v:string|number)=>string
    Array:(o:Array<any>,v:any)=>Array<any>
}

const commonFN=(orderedList:string|number, value:string|number):string => `${value}${orderedList}`

const fromMapping:fromMappingI = {
    Number: commonFN,
    String: commonFN,
    Array: (orderedList, value) => [value, ...orderedList],
  }

  type ReturnPropIterable<O,V> =
  O extends Array<infer E> ? Array<E |V> :
  V

  
  type PrependT={
      <V extends string|number,O extends number|string>(value:V, orderedList:O):string
      <A,V,O extends Array<A> >(value:V, orderedList:O): ReturnPropIterable<O,V>
  }
export const prepend_:PrependT= (value:any, orderedList:string | Array<any> | number) => {
    const type=type_(orderedList)
    const FN= fromMapping[type]
    if(isFunction(FN)){
return FN(orderedList,value)
    }

    throw new TypeError(
        `append doesn't know how to deal with ${type}`,
      )
      
}

const t1:string=prepend_(1,1) //'11'
const t2:string=prepend_(1,'1')// '11'
const t3:Array<string | number>=prepend_(1,['string']) //''