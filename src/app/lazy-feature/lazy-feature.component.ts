import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, DestroyRef, OnInit, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Photo } from '@app/_models';
import { PhotoService } from '@app/_services/photo.service';
import { Observable, combineLatest } from 'rxjs';

interface Paginator {
    currentPage: number;
    pageSize: number;
    length: number;
    hidePageSize: boolean;
    showFirstLastButtons: boolean;
}

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
    styleUrl: './lazy-feature.component.scss'
})
export class LazyFeatureComponent implements OnInit {

    title = 'Lazy Feature 1';
    description = 'HTTP service example';

    paginator: Paginator = {
        currentPage: 0,
        pageSize: 4,
        length: 100,
        hidePageSize: false,
        showFirstLastButtons: true,
    }

    // TODO: refactor to signals
    photos$ = this.getPhotoList(this.paginator.pageSize);

    private readonly photoGridList = viewChild.required<MatGridList>('photoGridList');

    constructor(
        private router: Router,
        private photoService: PhotoService,
        private destroyRef: DestroyRef
    ) { }

    ngOnInit(): void {
        // this.photos$ = this.photoService.getPhotoList(this.currentPage, this.pageSize);
    }

    ngAfterViewInit(): void {
        console.log('photoGridList ', this.photoGridList());
    }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }

    onPageEvent(event: PageEvent): void {
        this.paginator.currentPage = event.pageIndex;
        this.photos$ = this.getPhotoList(this.paginator.pageSize);
    }

    private getPhotoList(pageSize: number): Observable<Photo[]> {
        return combineLatest(
            [...Array(pageSize)].map(() => { return this.photoService.getPhoto(); })
        ).pipe(
            takeUntilDestroyed(this.destroyRef)
        );
    }
}
