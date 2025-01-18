import { TestBed } from '@angular/core/testing';

import { HttpErrorsInterceptor } from './http-errors.interceptor';

describe('HttpErrorsInterceptor', () => {

    let interceptor: HttpErrorsInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                HttpErrorsInterceptor
            ]
        });
        interceptor = TestBed.inject(HttpErrorsInterceptor);
    });

    it('should be created', () => {
        const interceptor: HttpErrorsInterceptor = TestBed.inject(HttpErrorsInterceptor);
        expect(interceptor).toBeTruthy();
    });
});
