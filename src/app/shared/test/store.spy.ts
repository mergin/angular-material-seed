import { asyncData } from "@app/core/utils";

export class StoreSpy {
    testCounter = 0;

    select = jasmine
        .createSpy('select')
        .and.callFake((counterFeature) => asyncData(this.testCounter));

    dispatch = () => {};
}
