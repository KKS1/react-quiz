export const isArray = (arg) => {
    return arg && (Object.prototype.toString.call(arg) === '[object Array]');//as Array.isArray needs polyfill
}