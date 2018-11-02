
export const isEqualNaN_=(value: any): value is typeof NaN =>value !== value;
export default isEqualNaN_