import curryN_ from './curryN_'


export const complement_= (pred: (...args: any[]) => boolean):((...args: any[]) => boolean)=>curryN_(pred.length,
  (...args)=> !pred(...args)
)

export default complement_