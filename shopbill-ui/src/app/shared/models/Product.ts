import { Common } from './Common'
import { CommonCode } from './CommonCode'

export class Product extends Common {
    code: string;
    name: string;
    hsnCode: string;
    unit: number;
    unitType: CommonCode;
    price: number;

    constructor(id: number, delYn: string, crtId: string, uptId: string, crtDtm: number, uptDtm: number, 
        code: string, name: string, hsnCode: string, unit: number, unitType: CommonCode, price: number) {
        super(id, delYn, crtId, uptId, crtDtm, uptDtm);
        this.code = code;
        this.name = name;
        this.hsnCode = hsnCode;
        this.unit = unit;
        this.unitType = unitType;
        this.price = price;
    }
}