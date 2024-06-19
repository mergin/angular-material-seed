import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

    constructor(
        private router: Router,
        private titleService: Title
    ) { }

    ngOnInit(): void {
        this.router.events.subscribe(
            (val) => {
                if (val instanceof NavigationEnd) {
                    this.showMain = (val.url == '/');
                    this.showMain && this.titleService.setTitle(this.title);
                }
            }
        );
    }
}
