import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

import { PhotoService } from './photo.service';

/**
 * Create async observable error that errors
 * after a JS engine turn
 */
export function asyncError<T>(errorObject: any) {
    return defer(() => Promise.reject(errorObject));
}

describe('PhotoService', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let service: PhotoService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });
        service = TestBed.inject(PhotoService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // it('should return an error when the server returns a 404', (done: DoneFn) => {
    //     const errorResponse = new HttpErrorResponse({
    //         error: 'test 404 error',
    //         status: 404,
    //         statusText: 'Not Found',
    //     });
    //     httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    //     service.getPhoto().subscribe({
    //         next: (photo) => done.fail('expected an error, not heroes'),
    //         error: (error) => {
    //             expect(error.message).toContain('test 404 error');
    //             done();
    //         },
    //     });
    // });
});
