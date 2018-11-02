import { Ctor} from "../ts-extra-types";
import isNil from "typed-is/lib/isNil";

export const getConstructor_=<T>(target: T)=> {
    if (isNil(target)) {
        return;
    }

    return target.constructor as Ctor<T>;
}

export default getConstructor_