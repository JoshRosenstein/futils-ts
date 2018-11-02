
import {
    IterableValues,
    ValuesOf,
} from "./vendorTypes/ts-extra-types";

import {hasMethod_} from './_internal/hasMethod'

import isNil from "typed-is/lib/isNil";
import isArray from "typed-is/lib/isArray";


type KVValues<T> =
    T extends string ? string[] :
    T extends IterableValues<infer V> ? V[] :
    T extends object ? ValuesOf<T> :
    [];


export const values_=<T>(value: T): KVValues<T>=> {
    if (isNil(value)) {
        return [] as KVValues<T>;
        //throw new Error(`keys doesn't know how to handle ${type_(value)}`)
    
    } 
    if (hasMethod_(value, "values")) {
        return [...value.values()] as KVValues<T>;
    }
    if (isArray(value)) {
        return [...value] as KVValues<T>;
    }
    return Object.values(value) as KVValues<T>;

}

export default values_