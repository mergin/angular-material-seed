import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Photo } from '@app/_models';
import { PhotoService } from '@app/_services/photo.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
    selector: 'app-lazy-feature',
    templateUrl: './lazy-feature.component.html',
    styleUrl: './lazy-feature.component.scss'
})
export class LazyFeatureComponent implements OnInit {

    @ViewChild('photoGridList') photoGridList!: ElementRef<MatGridList>;

    title = 'Lazy Feature 1';
    description = 'HTTP service example';
    photos$?: Observable<Photo[]>;

    // paginator
    currentPage: number = 0;
    pageSize: number = 4;
    length: number = 100;
    hidePageSize: boolean = false;
    showFirstLastButtons: boolean = true;

    constructor(
        private router: Router,
        private photoService: PhotoService
    ) { }

    ngOnInit(): void {
        // this.photos$ = this.photoService.getPhotoList(this.currentPage, this.pageSize);
        this.photos$ = this.getPhotoList(this.pageSize);
    }

    ngAfterViewInit(): void {
        console.log('photoGridList', this.photoGridList.nativeElement);
    }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }

    onPageEvent(event: PageEvent): void {
        this.currentPage = event.pageIndex;
        // this.photos$ = this.photoService.getPhotoList(this.currentPage, this.pageSize);
        this.photos$ = this.getPhotoList(this.pageSize);
    }

    private getPhotoList(pageSize: number): Observable<Photo[]> {
        return forkJoin(
            [...Array(pageSize)].map(() => { return this.photoService.getPhoto(); })
        );
    }

}
