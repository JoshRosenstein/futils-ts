declare type NumberType = number
declare type StringType = string
declare type MapKeyType = any
declare type A = any
declare type ArrayKeyType = NumberType
declare type ObjectKeyType = StringType
declare type KeyTypes = ObjectKeyType | ArrayKeyType | MapKeyType
declare type Ord = number | string | boolean | Date;
declare type Nil = null | undefined 
declare type PredicateFunctionTypeWithKeyT<T=any> = ((a:T, b:KeyTypes) => boolean)
declare type _Obj<T> = { [index: string]: T; } | { [index: number]: T; };
declare type Pred = (...a: any[]) => boolean;
declare type SafePred<T> = (...a: T[]) => boolean;
declare type ObjPred = (value: any, key: string) => boolean;

declare type PossiblyIterable<T> = T | Iterable<T>

declare interface PlainObj extends Object {
    (any): any
    call?: Fn
  }

declare type ArrayOfAny = Array<any>
declare type Fn = Function
declare type Obj = Object | Function | PlainObj
declare type ValidCollectionKey = Obj | Primitive
declare type ValidMap = Map<ValidCollectionKey, ValidCollectionKey>
declare type ValidSet = Set<ValidCollectionKey>
declare type ValidCollection = ValidMap | ValidSet

declare type Primitive =
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined
  | void

  declare type EnumerableT= ArrayOfAny|PlainObj|ValidCollection |string