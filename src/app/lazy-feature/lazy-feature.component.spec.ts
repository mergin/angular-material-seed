import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeatureComponent } from './lazy-feature.component';
import { SharedModule } from '@app/shared/shared.module';

describe('LazyFeatureComponent', () => {
    let component: LazyFeatureComponent;
    let fixture: ComponentFixture<LazyFeatureComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [LazyFeatureComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LazyFeatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
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
