import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from '@app/app.routes';
import { PhotoService, FactoryService } from '@app/core/services';
import { LazyFeatureComponent } from './lazy-feature.component';
import { PhotoServiceSpy } from '@app/shared/test';

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
