import { TestBed } from '@angular/core/testing';

import { FactoryService } from './factory.service';
import { Photo } from '@app/core/models';

describe('FactoryService', () => {
    let service: FactoryService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FactoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('createPhoto', () => {
        it('should create an empty Photo instance', () => {
            const newPhoto = service.createPhoto();

            expect(newPhoto).toBeInstanceOf(Photo);
            expect(newPhoto.id).toEqual(0);
            expect(newPhoto.author).toEqual('');
            expect(newPhoto.width).toEqual(0);
            expect(newPhoto.height).toEqual(0);
            expect(newPhoto.url).toEqual('');
            expect(newPhoto.download_url).toEqual('');
        });

        it('should create a Photo instance', () => {
            const photoId = 4200;
            const testPhoto: Photo = {
                author: 'Jonas Eriksson',
                download_url: `https://picsum.photos/id/${photoId}/2000/1500`,
                height: 1673,
                id: photoId,
                url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
                width: 2509
            };

            const newPhoto = service.createPhoto(testPhoto);

            expect(newPhoto).toBeInstanceOf(Photo);
            expect(newPhoto.id).toEqual(testPhoto.id);
            expect(newPhoto.author).toEqual(testPhoto.author);
            expect(newPhoto.width).toEqual(testPhoto.width);
            expect(newPhoto.height).toEqual(testPhoto.height);
            expect(newPhoto.url).toEqual(testPhoto.url);
            expect(newPhoto.download_url).toEqual(testPhoto.download_url);
        });
    });
});
