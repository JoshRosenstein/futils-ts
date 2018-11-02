import isEqualNaN from './isEqualNaN'
import curry2_ from '../curry2_'

type IsEqual_=(x: any, y: any)=>boolean
type IsEqual1=(x: any)=>(y: any)=>boolean

type IsEqual=IsEqual_ & IsEqual1

export const isEqual_=(x: any, y: any):boolean =>{
    if (x === y) {
        return true;
    }

    return isEqualNaN(x) && isEqualNaN(y);
}

const isEqual= curry2_(isEqual_)
 
//const a=isEqual(1) 

export default isEqual

