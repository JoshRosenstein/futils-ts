
import {reduceWhile_} from './reduceWhile'
import curry2_ from './curry2_';

type PredicateFunctionTypeWithKeyT<T> = ((a:T, b:KeyTypes) => boolean)

type Any_=<T>(predicateFn:(value:T,key?:PropertyKey)=>boolean,functor)=>boolean

export const any_:Any_=<T>(predicateFn:PredicateFunctionTypeWithKeyT<T>,functor)=>reduceWhile_<boolean>(
    acc => acc === false,
    (acc, value, key) => predicateFn(value, key),
    false,
    functor,
  )
  
  type Any= Any_&{
      <T>(predicateFn:(value:T,key?:PropertyKey)=>boolean):(functor)=>boolean
    }


const any:Any= curry2_( any_)

export default any
