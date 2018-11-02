import {toPairs_} from "./toPairs"
import curry3_ from "./curry3";
import {IterableValues,IterableKeys} from "./vendorTypes/ts-extra-types";
import isNil from "typed-is/lib/isNil";


const reduceRight=(arr,reducer,initial)=>{
  let idx = arr.length - 1
  while (idx >= 0) {
    initial = reducer(arr[idx], initial)
    idx -= 1
  }
  return initial
  
}

export const reduce_:Reduce_=(reducer ,initial,functor,right) => {
  if(isNil(functor)){
    return initial
  }
  if( Array.isArray(functor)){
    return !right ?functor.reduce(reducer,initial):reduceRight(functor,reducer,initial)
  }else{

    return reduce_((acc, [key, value]) => reducer(acc, value, key),initial,toPairs_(functor) )
  }

      }
    
      // const f11=(acc:number,value,key:string)=>acc+value as number
      // const f22=(acc,value)=>acc+value 
      // const b1=reduce_(f11,0,[1])

      //   const c1=reduce_(f11,1,[1])
      //   const c2=reduce_(f11,1,{a:1,b:2})
      //   const a21=reduce_(f22,1,[1])


  const reduce:ReduceT= curry3_(reduce_)
  
//   const hccdc=reduce<{[key:string]:number|string},string>((a,b)=>a+b)('')
// const plus=(a,b)=>a+b


  export default reduce
  
type GetV<O>=
O extends string? string: 
O extends Array<infer V>? V: 
O extends {[key:string]:infer V}? V : 
O extends IterableValues<infer E> ?  E :
unknown

type GetK<O>=
O extends string? number: 
O extends Array<any>? number:
O extends IterableKeys<infer V>?V:
O extends {[key:string]:any}? string :
 unknown

type ReducerFunc1<TResult>= (acc:TResult,value: any,key:any)=>TResult
type ReducerFunc2<F,TResult>= (acc:TResult,value: GetV<F>,key:GetK<F>)=>TResult



export type Reduce_T0={
  <TResult>(reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ):TResult
   <F,TResult>(reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F  ):TResult
 }

 
type Reduce_={
 <TResult>(reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ,right?:boolean ):TResult
  <F,TResult>
  (reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F ,right?:boolean ):TResult
}

export type ReduceT= Reduce_T0 &{
  <TResult>(reducer:ReducerFunc1<TResult> ):(initial:TResult)=>(functor:any )=>TResult
  <TResult>(reducer:ReducerFunc1<TResult> ):(initial:TResult,functor:any )=>TResult
  <TResult>(reducer:ReducerFunc1<TResult> ,initial:TResult):(functor:any )=>TResult

  <F,TResult>(reducer:ReducerFunc2<F,TResult> ):(initial:TResult)=>(functor:F )=>TResult
   <F,TResult>(reducer:ReducerFunc2<F,TResult> ):(initial:TResult,functor:F )=>TResult
   <F,TResult>(reducer:ReducerFunc2<F,TResult> ,initial:TResult):(functor:F )=>TResult


  }




// const f1=(acc:number,value:number,key)=>acc+value as number
//  const f2=(acc:string,value)=>acc+value 
//  const a=reduce(f1,0)
//  const b=reduce_((a,b)=>a+b,0,{a:1})
//  const bc=reduce_<number[],number>((a,b)=>a+b,0,[1])
//  const bcc=reduce_<string,string>((a,b)=>a+b,'1','1')
//  const bccx=reduce_<number[],number>((a,b)=>a+b,1,[1])
//  const S=new Set([1,2,3])
//  const bccdx=reduce_<number>((a,b,k)=>a+b,1,S)

//  const aa=reduce_(f1,0,[1])
//    const c=reduce_(f1,1,[1])

//    const cc=reduce_(f2,'',['a'])
//    const a2=reduce_(f2,'1',[1])

   /// NOTE:
   /// Maybe Copy main function and export individual Types 
  //  type RRArray_={
  //   <T, TResult>(reducer:(acc:TResult,value: T,key:number)=>TResult ,initial:TResult,functor:ReadonlyArray<T>):TResult


  //  }
  //  type RRArray= RRArray_ &{
  //   <T, TResult>(fn: (acc: TResult, value: T,key:number) => TResult ): (acc: TResult, list: ReadonlyArray<T>) => TResult;
  //   <T, TResult>(fn: (acc: TResult, value: T,key:number) => TResult, acc: TResult): (list: ReadonlyArray<T>) => TResult;

  //  }

  // const reduceArr_:RRArray_=reduce_
  // const reduceArr:RRArray=reduce

  // const ccc=reduceArr_(f1,1,[1]) 
  //  const hccc=reduceArr(f1,1)
 