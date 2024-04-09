export class Photo {
    constructor(
        public id: number = 0,
        public author: string = '',
        public width: number = 0,
        public height: number = 0,
        public url: string = '',
        public download_url: string = '',
    ) { }
}
