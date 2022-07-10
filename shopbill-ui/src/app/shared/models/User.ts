import { Common } from './Common'
import { CommonCode } from './CommonCode'

export class User extends Common {
    type: CommonCode;
    code: string;
    name: string;
    email: string;
    address: string;
    mobile: number;
    phone: number;
    gstin: string;
    pan: string;
    state: string;
    stateCode: string;
    pinCode: number;
    balance: number;
    remark: string;

    constructor(id: number, delYn: string, crtId: string, uptId: string, crtDtm: number, uptDtm: number, 
        type: CommonCode, code: string, name: string, email: string, mobile: number, phone: number, 
        gstin: string, pan: string, state: string, stateCode: string, pinCode: number, balance: number,
        remark: string
    ) {
        super(id, delYn, crtId, uptId, crtDtm, uptDtm);
        this.type = type;
        this.code = code;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.phone = phone;
        this.gstin = gstin;
        this.pan = pan;
        this.state = state;
        this.stateCode = stateCode;
        this.pinCode = pinCode;
        this.balance = balance;
        this.remark = remark;
    }
}