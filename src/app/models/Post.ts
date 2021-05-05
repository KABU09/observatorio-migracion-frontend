//classes needed to consume the API
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
    hash: string| undefined;
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
    width: number| undefined;
    height: number| undefined;
    size: number|undefined;
    path?: any|undefined;
    url: string|undefined;
}

export class Formats {
    thumbnail: Thumbnail  |undefined;
    large: Large |undefined;
    medium: Medium |undefined;
    small: Small |undefined;
}

export class Miniatura {
    id: string|undefined;
    name: string|undefined;
    alternativeText: string|undefined;
    caption: string|undefined;
    width: number|undefined;
    height: number|undefined;
    formats: Formats|undefined;
    hash: string|undefined;
    ext: string|undefined;
    mime: string|undefined;
    size: number|undefined;
    url: string|undefined;
    previewUrl?: any|undefined;
    provider: string|undefined;
    provider_metadata?: any|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
}

export class Categoria {
    id: string|undefined;
    nombre: string|undefined;
    published_at: Date|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
    imagen:any |undefined;
}

export class Post {
    id: string|undefined;
    titulo: string|undefined;
    contenido: string|undefined;
    descripcion: string|undefined;
    published_at: Date|undefined;
    created_at: Date|undefined;
    updated_at: Date|undefined;
    miniatura: Miniatura|undefined;
    categorias: Categoria[]|undefined;
}