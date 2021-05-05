export class Activity {
    constructor(
        public id: string,
        public nombre: string,
        public fecha: Date,
        public descripcion: string,
        public published_at: string,
        public created_at: string,
        public updated_at: string,
        public imagenes: Imagenes[],
        public reunion: string
    ) { }
}

export class Imagenes {
    constructor(
        public id: string,
        public name: string,
        public alternativeText: string,
        public caption: string,
        public width: number,
        public height: number,
        public formats: Formats,
        public hash: string,
        public ext: string,
        public mime: string,
        public size: number,
        public url: string,
        public previewUrl: null,
        public provider: string,
        public provider_metadata: null,
        public created_at: string,
        public updated_at: string,
    ) { }
}

export class Formats {
    constructor(
        public thumbnail: Large,
        public large: Large,
        public medium: Large,
        public small: Large
    ) { }
}

export class Thumbnail {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}

export class Large {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}

export class Medium {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}

export class Small {
    name: string | undefined;
    hash: string | undefined;
    ext: string | undefined;
    mime: string | undefined;
    width: number | undefined;
    height: number | undefined;
    size: number | undefined;
    path?: any | undefined;
    url: string | undefined;
}



