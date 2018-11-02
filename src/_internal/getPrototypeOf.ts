import { _Reflect} from "./native/_Reflect"

export const getPrototypeOf_=(target: object)=> _Reflect.getPrototypeOf(target)

export default getPrototypeOf_