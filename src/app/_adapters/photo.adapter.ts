/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';

import { Adapter } from '.';
import { Photo } from '@app/_models';

@Injectable({
    providedIn: 'root'
})
export class PhotoAdapter implements Adapter<Photo> {

    constructor() { }

    adapt(item: any = {}): Photo {
        return new Photo(
            item.id,
            item.author,
            item.width,
            item.height,
            item.url,
            item.download_url
        );
    }

    adaptMap(items: Photo[] = []): Photo[] {
        return items.map(
            (item) => {
                return this.adapt(item);
            }
        );
    }
}
