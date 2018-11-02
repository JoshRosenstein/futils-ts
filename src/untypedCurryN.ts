import { AnyFunction } from './helper-types'

/**
 * Curries a function. Untyped parameters, easily adapts to various situations, best coupled with typed signature
 *
 * @example
 * untypedCurry( (a: any, cb: Function) => cb(a) )
 *
 * :: ( fn( a, b, ... c) -> x ) -> fn -> a -> b -> c -> x
 */
export function untypedCurry( fn: AnyFunction, ...args ) {

  return args.length >= fn.length ? fn( ...args ) : untypedCurry.bind( null, fn, ...args )
}



// const curryN_ = (n:number, fn:AnyFunction) => {

//     if(n < 1 ){
//         return fn
//     }
//     (...args)=>{
//         const left = n - args.length
//         return left > 0 ? curryN_(left, fn.bind(null, ...args)) : fn(...args)
//     }

// }

export const curryN_ = (numOfArgs: number,fn: AnyFunction,...args: Array<any>) =>
  args.length >= numOfArgs
    ? fn(...args)
    : curryN_.bind(null, numOfArgs, fn, ...args)

export default curryN_