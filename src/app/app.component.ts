import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

@Component({
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
