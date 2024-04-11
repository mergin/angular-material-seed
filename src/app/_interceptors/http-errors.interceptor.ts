import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpContextToken,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError, timeout } from 'rxjs';

export const RETRY_COUNT = new HttpContextToken(() => 3);
export const ERROR_COUNT = new HttpContextToken(() => 0);
export const TIMEOUT_LIMIT = new HttpContextToken(() => 5000);

@Injectable({ providedIn: 'root' })
export class HttpErrorsInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        const retryCount = request.context.get(RETRY_COUNT);
        const timeoutLimit = request.context.get(TIMEOUT_LIMIT);

        return next.handle(request)
            .pipe(
                timeout(timeoutLimit),
                tap({
                    // An error has occurred, so increment this request's ERROR_COUNT.
                    error: () => request.context.set(ERROR_COUNT, request.context.get(ERROR_COUNT) + 1)
                }),
                retry(retryCount),
                catchError(this.handleError<unknown>(request.method, request.urlWithParams, {}))
            );
    }

    /**
     * Handles Http operation that failed.
     * @param method - method of the operation that failed
     * @param url - url of the operation that failed
     * @param result - optional value to return as the observable result
     * @returns - handle error function
     */
    private handleError<T>(method: string, url: string, result?: T): (error: unknown) => Observable<HttpEvent<unknown>> {

        return (error: unknown): Observable<HttpEvent<unknown>> => {

            let errorMessage = 'Something bad happened; please try again later.';

            // Handle HTTP errors
            if (error instanceof HttpErrorResponse) {
                errorMessage = `${method} ${url} failed: ${error.error}`;
                this.handleHttpError(error);
            }

            console.log(errorMessage, result);

            // return an observable with a user-facing error message
            return throwError(() => new Error(errorMessage));
        };
    }

    /**
     * Handles HTTP specific errors
     * @param error - HTTP error object
     */
    private handleHttpError(error: HttpErrorResponse): void {
        switch (error.status) {
            case 401:
                console.error('Unauthorized request:', error);
                break;
            case 500:
                console.error('Server side error', error);
                break;
            default:
                console.error('HTTP error', error);
                break;
        }
    }
}
