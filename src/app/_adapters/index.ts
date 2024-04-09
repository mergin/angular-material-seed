export interface Adapter<T> {
    adapt(item: unknown): T;
    adaptMap(item: unknown): T[];
}

export * from './photo.adapter';
