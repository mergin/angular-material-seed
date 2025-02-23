import { asyncData } from '@app/core/utils';

export class StoreSpy {
    testCounter = 0;

    select = jasmine
        .createSpy('select')
        .and.callFake(() => asyncData(this.testCounter));

    dispatch = () => {};
}
