import isNil from 'typed-is/lib/isNil'

import { Ensure} from "../vendorTypes/ts-extra-types";
export const hasOwn_=<T, K extends PropertyKey>(target: T, key: K): target is Ensure<T, K> =>{
    if (isNil(target)) {
        return false;
    }

    return Object.call(target, key);
}

export default  hasOwn_


