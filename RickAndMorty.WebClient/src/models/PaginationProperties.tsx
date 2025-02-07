export interface PaginationProperties {
    page: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}