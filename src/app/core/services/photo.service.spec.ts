import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, provideHttpClient } from '@angular/common/http';

import { PhotoService } from './photo.service';
import { asyncError } from '@app/core/utils';
import { FactoryService } from './factory.service';
import { FactoryServiceSpy } from '@app/shared/test';

describe('PhotoService', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let service: PhotoService;

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

        TestBed.configureTestingModule({
            providers: [
                { provide: FactoryService, useClass: FactoryServiceSpy },
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        });

        TestBed.inject(HttpTestingController);
        service = TestBed.inject(PhotoService);
    });

    afterEach(() => {
        // Verify that none of the tests make any extra HTTP requests.
        TestBed.inject(HttpTestingController).verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('getPhoto', () => {
        it('should return Observable of Photo', () => {

            expect(service).toBeTruthy();
        });
    });

    xit('should return an error when the server returns a 404', (done: DoneFn) => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404,
            statusText: 'Not Found',
        });
        httpClientSpy.get.and.returnValue(asyncError(errorResponse));
        service.getPhoto().subscribe({
            next: () => done.fail('expected an error, not heroes'),
            error: (error) => {
                expect(error.message).toContain('test 404 error');
                done();
            },
        });
    });
});
