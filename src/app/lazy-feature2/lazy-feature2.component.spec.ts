import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyFeature2Component } from './lazy-feature2.component';
import { SharedModule } from '@app/shared/shared.module';

describe('LazyFeature2Component', () => {
    let component: LazyFeature2Component;
    let fixture: ComponentFixture<LazyFeature2Component>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [LazyFeature2Component]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LazyFeature2Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(LazyFeature2Component);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('h1')?.textContent).toContain('Lazy Feature 2');
    });
});
