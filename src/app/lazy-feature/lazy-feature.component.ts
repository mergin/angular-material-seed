import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lazy-feature',
    templateUrl: './lazy-feature.component.html',
    styleUrl: './lazy-feature.component.scss'
})
export class LazyFeatureComponent {

    constructor(private router: Router) { }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }

}
