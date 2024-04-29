import { Injectable } from '@angular/core';
import { Photo } from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class FactoryService {

    constructor() { }

    createPhoto(item: unknown): Photo {
        return Object.freeze(new Photo(
            (item as Photo).id,
            (item as Photo).author,
            (item as Photo).width,
            (item as Photo).height,
            (item as Photo).url,
            (item as Photo).download_url
        ));
    }
}
