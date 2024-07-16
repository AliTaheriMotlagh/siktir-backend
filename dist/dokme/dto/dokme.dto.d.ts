export declare enum FilterType {
    topDokme = "topDokme",
    lastSiktir = "lastSiktir",
    newDokme = "newDokme"
}
export declare class DokmeDto {
    url: string;
    title: string;
    description: string;
}
export declare class FilterDto {
    type: FilterType;
}
