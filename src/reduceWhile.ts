import {toPairs_} from "./toPairs"
import curryN from "./curryN";
import {IterableValues,IterableKeys} from "./vendorTypes/ts-extra-types";
import isNil from "typed-is/lib/isNil";

const pairWrapper = fn => (acc, [key, value], idx) => fn(acc, value, key, idx)

export const reduceWhile_:Reduce_T0=(pred,reducer ,initial,functor) => {
  if(isNil(functor)){
    return initial
  }
  if( Array.isArray(functor)){
    const length = functor.length
    let b = initial
    for (let i = 0; i < length; ++i) {
      const a = functor[i]
      if (!pred(b, a, i)) break
      b = reducer(b, a, i)
    }
    return b
  }else{

    return reduceWhile_(pairWrapper(pred),pairWrapper(reducer) ,initial,toPairs_(functor) )
  }
      }
    



  const reduceWhile:ReduceT= curryN(4,reduceWhile_)
  


  export default reduceWhile



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

type PredFunc1<TResult>= (acc:TResult,value: any,key:any)=>boolean
type PredFunc2<F,TResult>= (acc:TResult,value: GetV<F>,key:GetK<F>)=>boolean



export type Reduce_T0={
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ):TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F  ):TResult
 }

 
type Reduce_={
 <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult,functor:any ,right?:boolean ):TResult
  <F,TResult>
  (pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult,functor:F ,right?:boolean ):TResult
}

export type ReduceT= Reduce_T0 &{

  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ):(initial:TResult)=>(functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ):(initial:TResult,functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>,reducer:ReducerFunc1<TResult> ,initial:TResult):(functor:any )=>TResult
  
  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> )=>(initial:TResult)=>(functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> )=>(initial:TResult,functor:any )=>TResult
  <TResult>(pred:PredFunc1<TResult>):(reducer:ReducerFunc1<TResult> ,initial:TResult)=>(functor:any )=>TResult


  <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ):(initial:TResult)=>(functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ):(initial:TResult,functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>,reducer:ReducerFunc2<F,TResult> ,initial:TResult):(functor:F )=>TResult

   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> )=>(initial:TResult)=>(functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> )=>(initial:TResult,functor:F )=>TResult
   <F,TResult>(pred:PredFunc2<F,TResult>):(reducer:ReducerFunc2<F,TResult> ,initial:TResult)=>(functor:F )=>TResult

  }

