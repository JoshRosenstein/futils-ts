
import {
    EntriesOf,
    IterableEntries,
} from "./vendorTypes/ts-extra-types";

import {hasMethod_} from './_internal/hasMethod'
import isNil from "typed-is/lib/isNil";
import isString from "typed-is/lib/isString";

  
export type ToPairs_<T> =
    T extends string ? Array<[number, string]> :
    T extends IterableEntries<infer E> ? E[] :
    T extends object ? EntriesOf<T> :
    [];



export const toPairs_=<T>(value: T): ToPairs_<T>=> {
    if (isNil(value)) {
        return [] as ToPairs_<T>;
       // throw new Error(`toPairs doesn't know how to handle ${type_(value)}`)
    
    }
    if (isString(value)) {
        return toPairs_([...value]) as ToPairs_<T>;
    }
    if (hasMethod_(value, "entries")) {
        return [...value.entries()] as ToPairs_<T>;
    }

    return Object.entries(value)  as ToPairs_<T>;
}


export default toPairs_

// const a=toPairs2_([1,2])
// const b=toPairs2_({a:1})
// const c=toPairs2_(undefined)

// const a1=toPairs_([1,2])
// const b2=toPairs_({a:1})
// const c3=toPairs_(undefined)