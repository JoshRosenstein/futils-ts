import isNil from 'typed-is/lib/isNil'
import {hasMethod_} from './_internal/hasMethod'
import {curry2_} from './curry2_';
import {IterableValues,} from "./vendorTypes/ts-extra-types";


type ReturnPropArray<O,K,A> =
//O extends Array<infer A>?
K extends keyof O?O[K] | undefined:
K extends string? A | undefined:
K extends number? undefined:
any


 type ReturnPropIterable<O> =
O extends IterableValues<infer E> ? E | undefined :
undefined


type PropT_= {
    <O extends Array<any>,K extends keyof O >(prop:K ,obj:O):O[K] |undefined
    <O ,K extends keyof O >(prop:K ,obj:O):O[K]
    <O extends IterableValues<any>,K extends PropertyKey>(prop:K ,obj:O):ReturnPropIterable<O>
    <O ,K extends PropertyKey>(prop:K ,obj:O):undefined

    }

const prop_:PropT_=(prop ,obj)=>{
    if (isNil(obj)) {
        return undefined 
      }
      if (hasMethod_(obj, 'get')) {
        return obj.get(prop) 
      }
      return obj[prop] 
}



type ReturnProp<O,K> =
O extends Array<infer A>?ReturnPropArray<O,K,A>:
K extends keyof O?O[K] :
O extends IterableValues<infer E> ? E | undefined :
undefined

type PropT= PropT_ &{
  <P extends string>(p: P): <T,O=Record<P, T>| Array<T> >(obj: O) => ReturnProp<O,P>   
  <P extends number>(p: P): <T,O=Array<T> >(obj: O) => ReturnProp<O,P>
  }



const prop:PropT=curry2_(prop_)
export default prop

/// Undefined
// const u1_:undefined= prop_('str',undefined)
//  const u1c:undefined= prop('str')(undefined)
// const u1:undefined= prop('str',undefined)

// const tobj=({str:'2', num:3, fn:()=>1, arr:[1,2], obj:{a:1}})
// /// Object

// const o1_= prop_('str',tobj)
// const o1c= prop('str')(tobj)
// const o1= prop('str',tobj)

// const o2_= prop_('num',tobj)
// const o2c= prop('num')(tobj)
// const o2= prop('num',tobj)

// const o3_= prop_('fn',tobj)
// const o3c= prop('fn')(tobj)
// const o3= prop('fn',tobj)

// const o4_= prop_('arr',tobj)
// const o4c= prop('arr')(tobj)
// const o4= prop('arr',tobj)

// const o5_= prop_('obj',tobj)
// const o5c= prop('obj')(tobj)
// const o5= prop('obj',tobj)

// const o6_= prop_('doesntExist',tobj)
// const o6c= prop('doesntExist')(tobj)
// const o6= prop('doesntExist',tobj)

// // Object with numbered keys
// const o7Data= {1:1,2:2,3:3}

// const o7_:number= prop_(1,o7Data)
// const o7c:number= prop(1)(o7Data)
// const o7:number= prop(1,o7Data)

// const o8_:null= prop_('b',{a:'2', b:null})

// //// Map
// const m1Data= new Map([['key1', 1],['key2',2]])
// const m1_:number|undefined=prop_('key2',m1Data )
// const m1:number|undefined=prop(1,m1Data )
// const m1c:number|undefined=prop(1)(m1Data )

// const m2Data= new Map([['key', '1'],['key2', '2']])
// const m2_:string | undefined=prop_('key',m2Data )
// const m2:string | undefined=prop(1,m2Data )
// const m2c:string | undefined=prop(1)(m2Data )


// //// Set
// const s1Data= new Set([1, 2, 3])
// /// Set with Number
// const s1_:number|undefined=prop_(1,s1Data )
// const s1:number|undefined=prop(3,s1Data )
// const s1c:number|undefined=prop(3)(s1Data )
// /// Set with Number indexed by string
// const s4_:number|undefined=prop_('1',s1Data )
// const s4:number|undefined=prop('3',s1Data )
// const s4c:number|undefined=prop('3')(s1Data )


// /// Set with Strings
// const s2Data= new Set(['1', '2', '3'])
// const s2_:string | undefined=prop_(1,s2Data )
// const s2:string | undefined=prop(3,s2Data )
// const s2c:string | undefined=prop(3)(s2Data )

// /// Set with mixed Strings and numbers
// const s3Data= new Set(['1', 2, '3'])
// const s3_:string | number | undefined=prop_(1,s3Data )
// const s3:string | number | undefined=prop(3,s3Data )
// const s3c:string | number | undefined=prop(3)(s3Data )



// ///Array
// const a1Data= [3,5,6]
// /// Numbered Array
// const a1_:number|undefined= prop_(0,a1Data)
// const a1:number|undefined = prop(0,a1Data)
// const a1c:number|undefined = prop(0)(a1Data)

// /// mixed String Number Array
// const a2_:string|number|undefined = prop_(1,['3',5,6])
// const a2:string|number|undefined = prop(1,['3',5,6])
// const a2c:string|number|undefined = prop(1)(['3',5,6])

// /// Numbered Array indexed with String
// const a3_:number|undefined= prop_('0',a1Data)
// const a3:number|undefined = prop('0',a1Data)
// const a3c:number|undefined = prop('0')(a1Data)

// /// mixed String Number Array indexed with String
// const a4_:string|number|undefined = prop_(1,['3',5,6])
// const a4:string|number|undefined = prop(1,['3',5,6])
// const a4c:string|number|undefined = prop(1)(['3',5,6])


// /// Keys outside of array index doesnt return single undefined like Objs
// const a5_:number|string | undefined  = prop_(9,['3',5,6])
// const a5:number|string | undefined = prop(9,['3',5,6])
// const a5c:number|string | undefined = prop(9)(['3',5,6])







