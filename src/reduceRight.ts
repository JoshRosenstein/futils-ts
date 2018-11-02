import {reduce_,Reduce_T0,ReduceT} from './reduce'
import curry3_ from "./curry3";

 
export const reduceRight_:Reduce_T0= (reducer, initial, functor) =>
  reduce_(reducer, initial, functor, true)

  const reduceRight:ReduceT= curry3_(reduceRight_)

  export default reduceRight