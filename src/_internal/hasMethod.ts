import { Func, Require} from "../vendorTypes/ts-extra-types";
import isFunction from 'typed-is/lib/isFunction'
import {has_} from './has'

export const hasMethod_=<T, K extends PropertyKey>(target: T, property: K):
        target is Extract<Require<T, K & keyof T>, Record<K, Func>>=> {

        if (!has_(target, property)) {
            return false;
        }

        const value = target[property];

        return isFunction(value);
    }

export default hasMethod_