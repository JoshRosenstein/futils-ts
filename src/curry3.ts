import {curryN_} from './curryN'

export const curry3_ = (fn:(...args: any[]) => any):((...a: any[]) => any) => curryN_(3, fn)

export default curry3_
