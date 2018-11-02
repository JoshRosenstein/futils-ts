import {liftN_} from './liftN'

export default fn => liftN_(fn.length, fn)
