export class Common {
    id: number;
	delYn: string;
	crtId: string;
	uptId: string;
	crtDtm: number;
	uptDtm: number;

    constructor(id: number, delYn: string, crtId: string, uptId: string, crtDtm: number, uptDtm: number) {
        this.id = id;
        this.delYn = delYn;
        this.crtId = crtId;
        this.uptId = uptId;
        this.crtDtm = crtDtm;
        this.uptDtm = uptDtm;
    }
}