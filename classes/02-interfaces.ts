
export interface HasId {
    id:string;
    printId(): void;
}

export interface HasTitle extends HasId {
    title: string;
}
