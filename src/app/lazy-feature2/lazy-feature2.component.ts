import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-lazy-feature2',
    templateUrl: './lazy-feature2.component.html',
    styleUrl: './lazy-feature2.component.scss'
})
export class LazyFeature2Component {

    constructor(private router: Router) { }

    onButtonClick(): void {
        this.router.navigate(['/']);
    }
}
