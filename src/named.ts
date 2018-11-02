export function named <T> (value: string, o: T): T
export function named (value: string): <T>(o: T) => T
export function named (value: string, o?: object) {
    return o === undefined
        ? (oo: object) => Object.defineProperty(oo, 'name', { value })
        : Object.defineProperty(o, 'name', { value })
}
