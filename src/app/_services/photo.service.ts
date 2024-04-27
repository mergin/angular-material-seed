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

    private readonly apiUrl: string = 'https://picsum.photos';

    constructor(
        private httpClient: HttpClient,
        private photoAdapter: PhotoAdapter
    ) { }

    /**
     * Makes a Photo detail request to public photo api
     * @param seed `number` to generate same random image. If none is provided a random number between 0 and 1000 is generated
     * @returns an `Observable` of a `Photo` object
     */
    getPhoto(seed?: number): Observable<Photo> {

        if (!seed && seed !== 0) seed = Math.floor(Math.random() * 1001);

        return this.httpClient.get<Photo>(`${this.apiUrl}/seed/${seed}/info`)
            .pipe(
                map(
                    (response: Photo): Photo => {
                        return this.photoAdapter.adapt(response);
                    }
                )
            );
    }

    /**
     * Makes request to public photo api
     * @param page sets the specific of the photo list
     * @param limit sets the amount of photos
     * @returns an `Observable` of an `Array` of `Photo` objects
     */
    getPhotoList(page: number = 0, limit?: number): Observable<Photo[]> {

        const options = {
            params: new HttpParams()
                .set('page', `${page}`)
                .set('limit', `${limit || 4}`)
        };

        return this.httpClient.get<Photo[]>(`${this.apiUrl}/v2/list`, options)
            .pipe(
                map(
                    (response: Photo[]): Photo[] => {
                        return this.photoAdapter.adaptMap(response);
                    }
                )
            );
    }
}
