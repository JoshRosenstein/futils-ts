import isNil from 'typed-is/lib/isNil'
import {complementOne_} from './complementOne'

const isDefined_ = complementOne_(isNil)

//const isNil_ = (val: mixed): boolean %checks => val == null

export default isDefined_
