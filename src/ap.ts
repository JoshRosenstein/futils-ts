import {reduce_} from './reduce'
import isFunction from 'typed-is/lib/isFunction'
import curry2_ from './curry2_';
import { mapValues_ } from './mapValues';

export const ap_= (applyF, applyX) =>
  isFunction(applyF)
    ? x => applyF(x)(applyX(x))
    : reduce_<any[]>((acc, f) => acc.concat(mapValues_(f, applyX)) , [], applyF)

    export default curry2_(ap_)
