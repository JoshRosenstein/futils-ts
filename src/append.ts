import {type_} from './type'
import isFunction from 'typed-is/lib/isFunction'
import { AnyFunction } from './helper-types';
import { IterableValues } from "./vendorTypes/ts-extra-types";
import {curry2_} from './curry2_';

interface fromMappingI{
    [key: string]: AnyFunction
    Number:(o:number,v:string|number)=>string
    String:(o:string,v:string|number)=>string
    Array:(o:Array<any>,v:any)=>Array<any>
}

const fromMapping:fromMappingI = {
    Number: (orderedList, value) => `${orderedList}${value}`,
    String: (orderedList, value) => `${orderedList}${value}`,
    Array: (orderedList, value) => orderedList.concat([value]),
  }

  type ReturnPropIterable<O,V> =
  O extends Array<infer E> ? Array<E |V> :
  //O extends string|number ? string:
  undefined

  
  type Append_T={
      <V extends string|number,O extends number|string>(value:V, orderedList:O):string
      <V,O extends Array<any> >(value:V, orderedList:O): ReturnPropIterable<O,V>
  }
export const append_:Append_T= (value:any, orderedList:string | Array<any> | number) => {
    const type=type_(orderedList)
    const FN= fromMapping[type]
    if(isFunction(FN)){
return FN(orderedList,value)
    }

    throw new TypeError(
        `append doesn't know how to deal with ${type}`,
      )
      
}

type AppendT=Append_T&{
    <V>(value:V): <O = Array<any>>(orderedList:O)=> ReturnPropIterable<O,V>

    <V = string|number>(value:V):<O = number|string>( orderedList:O)=>string


}

const append:AppendT=curry2_(append_)

export default append

const t1_:string=append_(1,1) //'11'
const t1=append_(1,1) //'11'
const t1c=append([1])(1) //'11'

const t2_:string=append_(1,'1')// '11'

const t3_:Array<string | number>=append_(1,['string']) //''
const t3=append(1,['string']) 
const t3c=append(1)(['string']) 