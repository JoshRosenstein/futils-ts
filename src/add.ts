
import curry2_ from './curry2_'

type Add_ = (a:number,b:number)=>number 


export const add_:Add_= (a,b) => Number(a)+Number(b)

type Add = Add_ & ((a: number) => (b: number) => number) 

const add:Add=curry2_(add_)


export default add


