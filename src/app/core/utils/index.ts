import { defer } from "rxjs";

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
};

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
};
