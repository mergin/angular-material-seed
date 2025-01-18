import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
    let service: PhotoService;

    beforeEach(() => {
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
});
