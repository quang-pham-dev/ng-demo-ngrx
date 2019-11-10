export interface Paging {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    pages: Array<number>;
    totalItems: number;
    startItem: number;
    endItem: number;
}
