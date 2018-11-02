export type mixed=any
export type ValueType=mixed
export type UnaryFunctionType<I= mixed, O= mixed> = (a:I) => O;

export type MapKeyType = mixed
export type ObjectKeyType = string
export type ArrayKeyType = number

export type KeyType = ObjectKeyType | ArrayKeyType | MapKeyType

export type ObjectType<V= ValueType> = {[key: string]: V}

export type MapType<K= MapKeyType, V= ValueType> = Map<K, V>
export type RecordType<K= KeyType, V= ValueType> = ObjectType< V> | MapType<K, V>
export type StringType= string
export type TextType = StringType 

export type SetType<V= ValueType> = Set<V>
export type ArrayType<V= ValueType> = Array<V>
export type ListType<V= ValueType> = ArrayType<V> | SetType<V>
export type FunctorType<V= ValueType> = ListType<V> | RecordType<KeyType,V>  | TextType

