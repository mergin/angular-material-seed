import { Injectable } from '@angular/core';
import { Photo } from '@app/core/models';

@Injectable({
    providedIn: 'root'
})
export class FactoryService {

    constructor() { }

    createPhoto(item = {} as Partial<Photo>): Photo {
        return Object.freeze(new Photo(
            item.id,
            item.author,
            item.width,
            item.height,
            item.url,
            item.download_url
        ));
    }
}
