import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { Photo } from '@app/_models';
import { PhotoService } from '@app/_services/photo.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
    selector: 'app-lazy-feature',
    templateUrl: './lazy-feature.component.html',
    styleUrl: './lazy-feature.component.scss'
})
export class LazyFeatureComponent implements OnInit {

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
        this.photos$ = this.photoService.getPhotos(this.currentPage, this.pageSize);
    }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }

    onPageEvent(event: PageEvent): void {
        this.currentPage = event.pageIndex;
        this.photos$ = this.photoService.getPhotos(this.currentPage, this.pageSize);
    }

}
