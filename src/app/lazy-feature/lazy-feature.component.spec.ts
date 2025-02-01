import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { defer } from 'rxjs';

import { routes } from '@app/app.routes';
import { Photo } from '@app/core/models';
import { PhotoService, FactoryService } from '@app/core/services';
import { LazyFeatureComponent } from './lazy-feature.component';

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
}

class PhotoServiceSpy {
    photoId = 4200;
    testPhoto: Photo = {
        author: 'Jonas Eriksson',
        download_url: `https://picsum.photos/id/${this.photoId}/2000/1500`,
        height: 1673,
        id: this.photoId,
        url: 'https://unsplash.com/photos/BeD3vjQ8SI0',
        width: 2509
    };

    /* emit cloned test photo */
    getPhoto = jasmine
        .createSpy('getPhoto')
        .and.callFake(() => asyncData(Object.assign({}, this.testPhoto)));
}

describe('LazyFeatureComponent', () => {
    let component: LazyFeatureComponent;
    let fixture: ComponentFixture<LazyFeatureComponent>;
    let photoService: PhotoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LazyFeatureComponent],
            providers: [
                { provide: PhotoService, useClass: PhotoServiceSpy },
                FactoryService,
                provideHttpClient(),
                provideRouter(routes)
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LazyFeatureComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();

        // UserService from the root injector
        photoService = TestBed.inject(PhotoService);
    });

    it('should create', () => {
        fixture.detectChanges(); // ngOnInit()
        expect(component).toBeDefined();
    });

    it('should render title', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Lazy Feature 1');
    });
});
