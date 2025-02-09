import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    inject,
    OnInit,
    signal,
    Signal,
    viewChild,
    WritableSignal
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { derivedAsync } from 'ngxtension/derived-async';

import { Photo } from '@app/core/models';
import { PhotoService } from '@app/core/services';
import { Paginator } from './lazy-feature.types';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        NgOptimizedImage,
        MatButtonModule,
        MatDividerModule,
        MatGridListModule,
        MatPaginatorModule
    ],
    selector: 'app-lazy-feature',
    templateUrl: './lazy-feature.component.html',
    styleUrl: './lazy-feature.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyFeatureComponent {

    photos: Signal<Photo[]>;
    paginator: WritableSignal<Paginator> = signal({
        currentPage: 0,
        pageSize: 4,
        length: 100,
        hidePageSize: false,
        showFirstLastButtons: true,
    })

    private readonly photoGridList = viewChild.required<MatGridList>('photoGridList');
    private readonly photoService = inject(PhotoService);
    private readonly router = inject(Router);
    private readonly destroyRef = inject(DestroyRef);

    constructor() {
        this.photos = derivedAsync(() =>
            this.getPhotoList(this.paginator().currentPage, this.paginator().pageSize), { initialValue: [] }
        );
    }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }

    onPageEvent(event: PageEvent): void {
        this.paginator.set({
            ...this.paginator(),
            currentPage: event.pageIndex
        });
    }

    private getPhotoList(page: number, pageSize: number): Observable<Photo[]> {
        return combineLatest(
            [...Array(pageSize)].map((_, index) => {

                // generate seed to mimic paging use
                const seed = Math.random() * (page + 1) * 100 * (index + 1);
                return this.photoService.getPhoto(seed);
            })
        ).pipe(takeUntilDestroyed(this.destroyRef));
    }
}
