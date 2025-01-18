import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

import { LazyFeatureComponent } from './lazy-feature.component';
import { PhotoService } from '@app/_services/photo.service';

describe('LazyFeatureComponent', () => {
    let component: LazyFeatureComponent;
    let fixture: ComponentFixture<LazyFeatureComponent>;
    let photoService: PhotoService;
    let componentPhotoService: PhotoService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        })
            .compileComponents();

        fixture = TestBed.createComponent(LazyFeatureComponent);
        fixture.autoDetectChanges();
        component = fixture.componentInstance;

        // UserService actually injected into the component
        photoService = fixture.debugElement.injector.get(PhotoService);
        componentPhotoService = photoService;
        // UserService from the root injector
        photoService = TestBed.inject(PhotoService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(LazyFeatureComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Lazy Feature 1');
    });
});
