const curryN_ = (n:number, f:(...args: any[]) => any):((...a: any[]) => any) =>
  n < 1 ? f : (...args: any[]) => {
    const left = n - args.length

    return left > 0
      ? curryN_(left, f.bind(null, ...args))
      : f(...args)
  }

export default curryN_