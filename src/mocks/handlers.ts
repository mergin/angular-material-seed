import { http, HttpHandler, HttpResponse } from 'msw';
import { Photo } from '../app/_models';

type GetPhotoParams = {
    seed: string

}
type GetPhotoParamsList = {
    page: string,
    limit: string
}

/**
 * Single photo example API call
 * source: https://picsum.photos/seed/picsum/info
 */
const getPhoto: HttpHandler = http.get<GetPhotoParams, Photo>(
    '/seed/:seed/info', async ({ params }) => {

        return HttpResponse.json({
            author: 'Jonas Eriksson',
            download_url: `https://picsum.photos/id/${params.seed}/2509/1673`,
            height: 1673,
            id: params.seed,
            url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
            width: 2509
        });
    }
);

/**
 * Photo List example API call
 * source: https://picsum.photos/v2/list?page=2&limit=100
 */
const getPhotoList: HttpHandler = http.get<GetPhotoParamsList, Photo[]>(
    '/v2/list', async () => {

        return HttpResponse.json([{
            author: 'Thom',
            download_url: 'https://picsum.photos/id/160/3200/2119',
            height: 2119,
            id: '160',
            url: 'https://unsplash.com/photos/Zdcq3iKly6g',
            width: 3200
        },
        {
            author: 'Anders Jildén',
            download_url: 'https://picsum.photos/id/249/3000/2000',
            height: 2000,
            id: '249',
            url: 'https://unsplash.com/photos/nrLtvA05jk8',
            width: 3000
        },
        {
            author: 'Israel Sundseth',
            download_url: 'https://picsum.photos/id/579/2164/1440',
            height: 1440,
            id: '579',
            url: 'https://unsplash.com/photos/BYu8ITUWMfc',
            width: 2164
        },
        {
            author: 'Jonas Eriksson',
            download_url: 'https://picsum.photos/id/570/2509/1673',
            height: 1673,
            id: '570',
            url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
            width: 2509
        }]);
    }
);

export const handlers = [
    getPhoto,
    getPhotoList
];
