
type ComplementOne=(fn:Pred)=>(arg:any)=>boolean

export const complementOne_:ComplementOne=fn => arg =>!fn(arg)

export default complementOne_

