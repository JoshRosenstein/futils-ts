import {Ctor} from "../vendorTypes/ts-extra-types";

import isFunction from 'typed-is/lib/isFunction'
import isObjectOrFunction from './isObjectOrFunction'
import {isInstanceOf_} from './isInstanceOf'
import {isEqual_} from './isEqual'
import untypedCurry from '../untypedCurry'


type IsSubclassOf_=<C, T>( b: Ctor<T>,a: C)=> a is Extract<C, Ctor<T>>
type IsSubclassOf1=(<T>(b: Ctor<T>)=><C>(a: C)=> a is Extract<C, Ctor<T>>)
type IsSubclassOf=IsSubclassOf_ & IsSubclassOf1

// @ts-ignore
export const isSubclassOf_=<C, T>(b: Ctor<T>,a:C):a is Extract<C, Ctor<T>>  =>{
    if (!isFunction(a)) {
        return false;
    }

    if (!isObjectOrFunction(b)) {
        return false;
    }

    return isInstanceOf_( b,a.prototype) || isEqual_(a, b); 
}



export interface isSubclassOfI {
    <C, T>(b: Ctor<T>,a:C):a is Extract<C, Ctor<T>> 
    <T>(b: Ctor<T>):<C>(a:C)=>a is Extract<C, Ctor<T>> 
  }

 
   function isSubclassOf<C, T>(b: Ctor<T>,a:C):a is Extract<C, Ctor<T>> 
 function isSubclassOf<T>(b: Ctor<T>):<C>(a:C)=>a is Extract<C, Ctor<T>> 
  function isSubclassOf( ...args ) {
    return  untypedCurry( ( b, a ) => isSubclassOf_(b,a))( ...args )
  }


//const isSubclassOf:isSubclassOfI= curry( isSubclassOf_)

//const isSubclassOf:CurriedisSubclassOf<>= curry2_(isSubclassOf_)




export default isSubclassOf