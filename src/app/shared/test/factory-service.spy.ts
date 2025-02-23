import { Photo } from '@app/core/models';
import { asyncData } from '@app/core/utils';
import { TEST_PHOTO } from '.';

export class FactoryServiceSpy {
    photoId = 4200;
    testPhoto: Photo = TEST_PHOTO(this.photoId);

    /* emit cloned test photo */
    createPhoto = jasmine
        .createSpy('createPhoto')
        .and.callFake(() => asyncData(Object.assign({}, this.testPhoto)));
}
