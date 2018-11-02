
import {Ctor} from "../vendorTypes/ts-extra-types";
import curry2_ from '../curry2_'



export const isInstanceOf_5=<C extends Ctor>( ctor: C,obj: any): obj is InstanceType<C>=> {
    return obj instanceof ctor;
}


export type IsInstanceOf_={
    <C extends Ctor>( ctor: C,obj: any):obj is InstanceType<C>
}


export const isInstanceOf_=<C extends Ctor>( ctor: C,obj: any):obj is InstanceType<C>=> {
    return obj instanceof ctor;
}

type IsInstanceOf = IsInstanceOf_ & (<C extends Ctor>( ctor: C)=>(obj: any)=>obj is InstanceType<C>)


const isInstanceOf:IsInstanceOf=curry2_(isInstanceOf_)


// const a= isInstanceOf(Number)(1)
//  const c= isInstanceOf(Number,1)
// const b= isInstanceOf(Number)


export default isInstanceOf
