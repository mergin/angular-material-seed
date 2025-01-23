import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { LazyFeatureComponent } from './lazy-feature.component';
import { PhotoService } from '@app/_services/photo.service';
import { routes } from '@app/app.routes';
import { defer, Observable, of } from 'rxjs';
import { Photo } from '@app/_models';
import { FactoryService } from '@app/_services/factory.service';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

describe('LazyFeatureComponent', () => {
    let component: LazyFeatureComponent;
    let fixture: ComponentFixture<LazyFeatureComponent>;
    let photoService: PhotoService;
    let componentPhotoService: PhotoService;
    let getPhotoSpy: jasmine.Spy<(seed?: number) => Observable<Photo>>;
    let testPhoto: Photo;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LazyFeatureComponent],
            providers: [
                PhotoService,
                FactoryService,
                provideHttpClient(),
                provideRouter(routes)
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LazyFeatureComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
        testPhoto = new Photo();

        // {
        //     author: 'Jonas Eriksson',
        //     download_url: `https://picsum.photos/id/${params.seed}/2000/1500`,
        //     height: 1673,
        //     id: params.seed,
        //     url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
        //     width: 2509
        // }

        // UserService actually injected into the component
        photoService = fixture.debugElement.injector.get(PhotoService);
        componentPhotoService = photoService;

        // UserService from the root injector
        photoService = TestBed.inject(PhotoService);
        // Make the spy return a synchronous Observable with the test data
        getPhotoSpy = spyOn(photoService, 'getPhoto').and.returnValue(asyncData(testPhoto));
    });

    // beforeEach(() => {

    // });

    it('should create', () => {
        fixture.detectChanges(); // ngOnInit()
        expect(component).toBeDefined();
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Lazy Feature 1');
    });
});
