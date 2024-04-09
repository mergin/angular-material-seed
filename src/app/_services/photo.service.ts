import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhotoAdapter } from '@app/_adapters';
import { Photo } from '@app/_models';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    private readonly apiUrl: string = 'https://picsum.photos/v2/list';

    constructor(
        private httpClient: HttpClient,
        private photoAdapter: PhotoAdapter
    ) { }

    /**
     * Makes request to public photo api
     * @param page sets the specific of the photo list
     * @param limit sets the amount of photos
     * @returns an `Array` of `Photo` objects
     */
    getPhotos(page: number = 0, limit?: number): Observable<Photo[]> {

        const options = {
            params: new HttpParams()
                .set('page', `${page}`)
                .set('limit', `${limit || 4}`)
        };

        return this.httpClient.get<Photo[]>(this.apiUrl, options)
            .pipe(
                map(
                    (response: Photo[]): Photo[] => {
                        return this.photoAdapter.adaptMap(response);
                    }
                )
            );
    }
}
