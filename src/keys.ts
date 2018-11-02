import {
    IterableKeys,
    KeysOf,
} from "./vendorTypes/ts-extra-types";
import {hasMethod_} from './_internal/hasMethod'

import isNil from "typed-is/lib/isNil";
import isString from "typed-is/lib/isString";

type KVKeys<T> =
    T extends string ? Array<[number, string]> :
    T extends IterableKeys<infer E> ? E[] :
    T extends object ? KeysOf<T> :
    [];



export const keys_=<T>(value: T): KVKeys<T>=> {
    if (isNil(value)) {
        return [] as KVKeys<T>;
        //throw new Error(`keys doesn't know how to handle ${type_(value)}`)
    
    } 
    if (isString(value)) {
        return keys_([...value]) as KVKeys<T>;
    }
    if (hasMethod_(value, "keys")) {
        return [...value.keys()] as KVKeys<T>;
    }

    return Object.keys(value) as KVKeys<T>;
}

export default keys_