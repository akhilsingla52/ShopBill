export class Pageable {
    page: number;
	size: number;
	sort: string;
	search: string;

    constructor(page: number, size: number, sort: string, search: string) {
        this.page = page;
        this.size = size;
        this.sort = sort;
        this.search = search;
    }
}