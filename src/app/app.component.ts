import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

    title = 'angular-material-seed';
    showMain = true;

    private readonly titleService = inject(Title);
    private readonly router = inject(Router);
    // private readonly titleService = inject(Title);

    constructor(
        private readonly destroyRef: DestroyRef
    ) { }

    ngOnInit(): void {
        this.router.events
            .pipe(
                takeUntilDestroyed(this.destroyRef)
            )
            .subscribe(
                (val) => {
                    if (val instanceof NavigationEnd) {
                        this.showMain = (val.url == '/');
                        if (this.showMain) {
                            this.titleService.setTitle(this.title);
                        }
                    }
                }
            );
    }
}
