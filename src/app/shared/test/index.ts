import { Photo } from '@app/core/models';

export * from './factory-service.spy';
export * from './photo-service.spy';
export * from './store.spy';

export const TEST_PHOTO = (photoId: number): Photo => {
    return {
        author: 'Jonas Eriksson',
        download_url: `https://picsum.photos/id/${photoId}/2000/1500`,
        height: 1673,
        id: photoId,
        url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
        width: 2509
    };
};
