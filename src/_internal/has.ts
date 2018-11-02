import { Ensure} from "../vendorTypes/ts-extra-types";
import isNil from 'typed-is/lib/isNil'
import {wrap_} from './wrap'


export const has_=<T, K extends PropertyKey>(target: T, key: K): target is Ensure<T, K>=> {
    if (isNil(target)) {
        return false;
    }

    return key in Object(target) //wrap_(target);
}
export default has_