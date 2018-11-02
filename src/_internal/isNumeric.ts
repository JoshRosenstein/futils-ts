import {isEqualNaN_} from './isEqualNaN'

export const isNumeric_=(value: any): value is string | number=> {
    const type = typeof value;

    return ("number" === type || "string" === type)
        && !isEqualNaN_(value - parseFloat(value));
}

export default isNumeric_